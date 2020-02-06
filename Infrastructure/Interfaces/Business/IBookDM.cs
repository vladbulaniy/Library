using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel;

namespace Infrastructure.Interfaces.Business
{
    public interface IBookDM: IDisposable
    {
        IEnumerable<BookVM> GetBooks();
        BookVM GetBook(int id);
        void CreateBook(BookVM model);
        void UpdateBook(BookVM model);
        void DeleteBook(int id);
    }
}
