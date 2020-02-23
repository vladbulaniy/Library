using Infrastructure.Interfaces.Business;
using System.Web.Mvc;

namespace Library.Controllers
{
    public class BooksController: BaseController
    {
        [HttpGet]
        public JsonResult GetBooks()
        {
            using (var dm = Factory.GetService<IBookDM>(RequestContext))
            {
                var result = dm.GetBooks();
                return Json(new { data = result }, JsonRequestBehavior.AllowGet);
            }
            
            //List<string> result = new List<string>
            //{
            //    "Book1", "Book2", "Book3"
            //};

        }
    }
}