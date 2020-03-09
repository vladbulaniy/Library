using Infrastructure.Interfaces.Business;
using System.Web.Mvc;
using ViewModel.DataGridParameters;

namespace Library.Controllers
{
    public class BooksController: BaseController
    {
        [HttpGet]
        public JsonResult GetBooks(DataGridInputParamsVM options)
        {
            using (var dm = Factory.GetService<IBookDM>(RequestContext))
            {
                var result = dm.GetBooks(options);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
        }
    }
}