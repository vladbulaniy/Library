using System;

namespace Infrastructure.Interfaces
{
    public interface IServiceProviderFactory: IServiceProvider
    {
        TService GetService<TService>(params object[] constructParams);
    }
}
