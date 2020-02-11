using Bootstrap;
using Infrastructure.Interfaces;
using Infrastructure.Interfaces.Data;
using System;
using System.Configuration;
using System.Web;

namespace Library.Context
{
    public class DefaultContext : HttpContextBase, IRequestContext
    {
        private const string CONNECTION_KEY = "DefaultConnection";

        public IServiceProviderFactory Factory { get; set; }
        public IDataContext DataContext { get; private set; }

        public DefaultContext()
        {
            var connectionString = ConfigurationManager.ConnectionStrings[CONNECTION_KEY].ToString();
            this.Factory = UnitySetup.CreateFactory(this);
            this.DataContext = this.Factory.GetService<IDataContext>(connectionString);
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}