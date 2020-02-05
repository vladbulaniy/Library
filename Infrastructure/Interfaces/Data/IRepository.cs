using System;
using System.Collections.Generic;

namespace Infrastructure.Interfaces.Data
{
    public interface IRepository<T, K> : IDisposable
        where T : class
    {
        IDataContext CurrentContext { get; }

        IEnumerable<T> GetAll();

        T Get(K id);

        long Create(T entity);

        void Update(T entity);

        void Delete(K id);
    }
}
