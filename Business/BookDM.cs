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
using ViewModel.DataGridParameters;

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

        public DataGridOutputParamsVM GetBooks(DataGridInputParamsVM options)
        {
            using (var repo = Factory.GetService<IBookRepository>(DataContext))
            {                
                int totalRows;

                var books = repo.GetBooks(options.Search.Value, options.Start, options.Length, out totalRows);

                var result = new DataGridOutputParamsVM()
                {
                    data = Factory.GetService<IEntityService>().ConvertTo<IEnumerable<BookEM>, IEnumerable<BookVM>>(books),
                    draw = options.Draw,
                    recordsTotal = totalRows,
                    recordsFiltered = totalRows
                };
                return result;
            }
        }
        
        public void UpdateBook(global::ViewModel.BookVM model)
        {
            throw new NotImplementedException();
        }
    }
}
