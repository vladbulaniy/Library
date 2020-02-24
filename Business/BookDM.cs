using Data.Entity;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Business;
using Infrastructure.Interfaces.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel;

namespace Business
{
    public class BookDM : BusinessContextBase, IBookDM
    {
        public BookDM(IRequestContext requestContext) : base(requestContext)
        {
            
        }

        public void CreateBook(global::ViewModel.BookVM model)
        {
            throw new NotImplementedException();
        }

        public void DeleteBook(int id)
        {
            throw new NotImplementedException();
        }

        public global::ViewModel.BookVM GetBook(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<global::ViewModel.BookVM> GetBooks()
        {
            using (var repo = Factory.GetService<IBookRepository>(DataContext))
            {
                var booksEM = repo.GetBooks();
                var booksVM = Factory.GetService<IEntityService>().ConvertTo<IEnumerable<BookEM>, IEnumerable<BookVM>>(booksEM);                
                return booksVM;
            }
        }
        
        public void UpdateBook(global::ViewModel.BookVM model)
        {
            throw new NotImplementedException();
        }
    }
}
