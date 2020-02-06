using Infrastructure.Interfaces;
using System;
using Unity;

namespace Bootstrap
{
    public class UnitySetup
    {
        private static Lazy<IUnityContainer> container = new Lazy<IUnityContainer>(() =>
        {
            IUnityContainer container = new UnityContainer();
            RegisterTypes(container);
            return container;
        });

        public static void RegisterTypes(IUnityContainer container)
        {
            UnityDependencyResolver.RegisterTypes(container);
        }

        public static IUnityContainer GetUnityConfig()
        {
            return container.Value;
        }

        public static IServiceProviderFactory CreateFactory(IRequestContext context)
        {
            return new ServiceProviderFactory(container.Value, context);
        }
    }
}
