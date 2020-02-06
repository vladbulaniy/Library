using Infrastructure.Interfaces.Data;
using System;

namespace Infrastructure.Interfaces.Business
{
    public interface IBusinessContext: IDisposable
    {
        IDataContext DataContext { get; }
        IServiceProviderFactory Factory { get; }
    }
}
