using Infrastructure.Interfaces;
using Library.Context;
using System.Text;
using System.Web.Mvc;

namespace Library.Controllers
{
    public class BaseController: Controller
    {
        private readonly object _mutex = new object();
        private IServiceProviderFactory _modelFactory = default(IServiceProviderFactory);
        private DefaultContext _context = default(DefaultContext);

        public BaseController()
        {

        }

        public IRequestContext RequestContext
        {
            get
            {
                lock (this._mutex)
                {
                    if (this._context == null)
                    {
                        this._context = new DefaultContext();
                    }
                }

                return this._context;
            }
        }

        protected IServiceProviderFactory Factory
        {
            get
            {
                lock (this._mutex)
                {
                    if (this._modelFactory == null)
                    {
                        this._modelFactory = this.RequestContext.Factory;
                    }

                    return this._modelFactory;
                }
            }
        }

        protected JsonResult Success(object model = null)
        {
            return new JsonResult()
            {
                ContentEncoding = Encoding.UTF8,
                ContentType = "application/json",
                Data = new { IsSuccess = true, Model = model },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
    }
}