using Data.Entity;
using System.Collections.Generic;

namespace Infrastructure.Interfaces.Data
{
    public interface IBookRepository : IRepository<BookEM, int>
    {
        IEnumerable<BookEM> GetBooks(string searchExpression, int start, int length, out int totalRow);
        BookEM GetBook(int id);
        void CreateBook(BookEM model);
        void UpdateBook(BookEM model);
        void DeleteBook(int id);
    }
}
