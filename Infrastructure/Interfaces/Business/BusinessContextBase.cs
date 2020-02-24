using System;
using Infrastructure.Interfaces.Data;

namespace Infrastructure.Interfaces.Business
{
    public class BusinessContextBase : IBusinessContext
    {       
        protected readonly IRequestContext context = default(IRequestContext);

        public BusinessContextBase(IRequestContext requestContext)
        {
            this.context = requestContext;         
        }

        public IDataContext DataContext { get { return this.context.DataContext; } }        

        public IServiceProviderFactory Factory { get { return this.context.Factory; } }

        public virtual void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
