using Infrastructure.Interfaces.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class RepositoryBase<T, K> : IRepository<T, K>
        where T : class
    {
        public IDataContext CurrentContext
        {
            get;
            private set;
        }

        protected RepositoryBase(IDataContext context)
        {
            this.CurrentContext = context;
        }

        public long Create(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(K id)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public T Get(K id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
