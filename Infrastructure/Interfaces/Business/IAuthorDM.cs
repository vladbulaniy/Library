using System;
using System.Collections.Generic;
using ViewModel;

namespace Infrastructure.Interfaces.Business
{
    public interface IAuthorDM: IDisposable
    {
        IEnumerable<AuthorVM> GetAuthors();
        AuthorVM GetAuthor(int id);
        AuthorVM CreateAuthor(AuthorVM model);
        void UpdateAuthor(AuthorVM model);
        void DeleteAuthor(int id);
    }
}
