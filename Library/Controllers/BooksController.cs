using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Library.Controllers
{
    public class BooksController: Controller
    {
        [HttpGet]
        public JsonResult GetBooks()
        {
            //using (var dm = Factory.GetService<IGrievanceDM>(RequestContext))
            //{
            //    dm.Save(model);
            //}
            List<string> result = new List<string>
            {
                "Book1", "Book2", "Book3"
            };
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}