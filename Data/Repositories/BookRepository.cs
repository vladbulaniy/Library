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
            string sqlQuery = @"SELECT * FROM Book";

            var sqlParams = new DynamicParameters();

            using (IDbConnection db = new SqlConnection(base.CurrentContext.DbConnection))
            {
                var bookEM = db.Query<BookEM>(sqlQuery, sqlParams).ToList();

                return bookEM;
            }
        }

        public void UpdateBook(BookEM model)
        {
            throw new NotImplementedException();
        }
    }
}
