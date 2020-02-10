using Dapper;
using Data.Entity;
using Infrastructure.Interfaces.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Data.Repositories
{
    public class BookRepository : RepositoryBase<BookEM, int>, IBookRepository
    {
        public BookRepository(IDataContext context) : base(context)
        {

        }
        public void CreateBook(BookEM model)
        {
            throw new NotImplementedException();
        }

        public void DeleteBook(int id)
        {
            throw new NotImplementedException();
        }

        public BookEM GetBook(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BookEM> GetBooks()
        {
            string spName = "USPGetBooks";

            using (IDbConnection db = new SqlConnection(base.CurrentContext.DbConnection))
            {
                var books = db.Query<BookEM, AuthorEM, BookEM>(spName, (book, author) =>
                {
                    if (author != null) book.Authors.Add(author);
                    else book.Authors = new List<AuthorEM>();
                    return book;
                }, null, null, true, splitOn: "AuthorId", null, CommandType.StoredProcedure);

                var result = books.GroupBy(b => b.BookId).Select(g =>
                {
                    var groupedPost = g.First();
                    if (groupedPost.Authors.Any()) groupedPost.Authors = g.Select(a => a.Authors.Single()).ToList();
                    return groupedPost;
                }).ToList();

                return result;
            }
        }

        public void UpdateBook(BookEM model)
        {
            throw new NotImplementedException();
        }
    }
}
