using System;
using ViewModel;
using ViewModel.DataGridParameters;

namespace Infrastructure.Interfaces.Business
{
    public interface IBookDM: IDisposable
    {
        DataGridOutputParamsVM GetBooks(DataGridInputParamsVM options);
        BookVM GetBook(int id);
        void CreateBook(BookVM model);
        void UpdateBook(BookVM model);
        void DeleteBook(int id);
    }
}
