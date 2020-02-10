using Data.Entity;
using System.Collections.Generic;

namespace Infrastructure.Interfaces.Data
{
    public interface IAuthorRepository : IRepository<AuthorEM, int>
    {
        IEnumerable<AuthorEM> GetAuthors();
        AuthorEM GetAuthor(int id);
        AuthorEM CreateAuthor(AuthorEM model);
        void UpdateAuthor(AuthorEM model);
        void DeleteAuthor(int id);
    }
}
