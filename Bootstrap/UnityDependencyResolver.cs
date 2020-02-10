using Data.Context;
using Infrastructure.Interfaces.Business;
using Infrastructure.Interfaces.Data;
using Microsoft.Practices.Unity;
using Infrastructure.Interfaces;
using Data.Repositories;
using Business;

namespace Bootstrap
{
    public class UnityDependencyResolver
    {
        protected static IUnityContainer container;

        public static void RegisterTypes(IUnityContainer _container)
        {
            container = _container;

            container.RegisterType<IDataContext, DapperContext>();
            container.RegisterInstance<IEntityService>(new ValueConverter());

            container.RegisterType<IBookRepository, BookRepository>();
            container.RegisterType<IAuthorRepository, AuthorRepository>();

            container.RegisterType<IBookDM, BookDM>();
            container.RegisterType<IAuthorDM, AuthorDM>();
        }
    }
}
