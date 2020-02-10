using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel;

namespace Business
{
    public class AuthorDM : BusinessContextBase, IAuthorDM
    {
        public AuthorDM(IRequestContext requestContext) : base(requestContext)
        {

        }

        public AuthorVM CreateAuthor(AuthorVM model)
        {
            throw new NotImplementedException();
        }

        public void DeleteAuthor(int id)
        {
            throw new NotImplementedException();
        }

        public AuthorVM GetAuthor(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<AuthorVM> GetAuthors()
        {
            throw new NotImplementedException();
        }

        public void UpdateAuthor(AuthorVM model)
        {
            throw new NotImplementedException();
        }
    }
}
