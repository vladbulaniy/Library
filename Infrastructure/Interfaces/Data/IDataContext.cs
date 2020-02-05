using System;

namespace Infrastructure.Interfaces.Data
{
    public interface IDataContext: IDisposable
    {
        string DbConnection { get; }
    }
}
