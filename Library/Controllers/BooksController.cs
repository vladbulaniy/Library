using Infrastructure.Interfaces.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
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
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            
            //List<string> result = new List<string>
            //{
            //    "Book1", "Book2", "Book3"
            //};

        }
    }
}