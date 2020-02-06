using System;

namespace Infrastructure.Interfaces
{
    public interface IServiceProviderFactory: IDisposable
    {
        T GetService<T>(params object[] constructParams);
    }
}
