using Infrastructure.Interfaces.Data;
using System;

namespace Infrastructure.Interfaces
{
    public interface IRequestContext: IDisposable
    {
        IDataContext DataContext { get; }
        IServiceProviderFactory Factory { get; }
    }
}
