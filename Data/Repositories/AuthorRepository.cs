using Data.Entity;
using Infrastructure.Interfaces.Data;
using System;
using System.Collections.Generic;

namespace Data.Repositories
{
    public class AuthorRepository : RepositoryBase<AuthorEM, int>, IAuthorRepository
    {
        public AuthorRepository(IDataContext context) : base(context)
        {
        }

        public AuthorEM CreateAuthor(AuthorEM model)
        {
            throw new NotImplementedException();
        }

        public void DeleteAuthor(int id)
        {
            throw new NotImplementedException();
        }

        public AuthorEM GetAuthor(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AuthorEM> GetAuthors()
        {
            throw new NotImplementedException();
        }

        public void UpdateAuthor(AuthorEM model)
        {
            throw new NotImplementedException();
        }
    }
}
