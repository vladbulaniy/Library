using System.Web;
using System.Web.Optimization;

namespace Library
{
    public class BundleConfig
    {
        // Дополнительные сведения об объединении см. на странице https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
            //            "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            // Используйте версию Modernizr для разработчиков, чтобы учиться работать. Когда вы будете готовы перейти к работе,
            // готово к выпуску, используйте средство сборки по адресу https://modernizr.com, чтобы выбрать только необходимые тесты.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/global/bootstrap.js",
                      "~/Scripts/global/knockout.mapping-latest.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            
            bundles.Add(new ScriptBundle("~/global/js")
                .Include("~/Scripts/global/jquery-3.3.1.js")
                .Include("~/Scripts/global/jquery.validate*")
                .Include("~/Scripts/global/bootstrap.js")
                .Include("~/Scripts/global/modernizr-2.8.3.js")
                .Include("~/Scripts/global/moment.js")
                .Include("~/Scripts/knockout-3.4.2.js")
                .Include("~/Scripts/global/knockout.mapping-latest.js")                
                //.Include("~/Scripts/global/knockout-mapping.js")
                //.Include("~/Scripts/global/knockout.validation.min.js")
                .Include("~/Scripts/global/DataTables/datatables.min.js")
                .Include("~/Scripts/global/bootstrap-select.js")
                .Include("~/Scripts/global/bootstrap-datepicker.min.js")
                .Include("~/Scripts/global/toastr.min.js")                
                );
            /*
            .Include("~/Scripts/jquery-1.10.2.min.js")
                .Include("~/Scripts/bootstrap.min.js")
                .Include("~/Scripts/modernizr-2.6.2.js")
                .Include("~/Scripts/moment.js")
                .Include("~/Scripts/knockout-3.4.2.js")
                .Include("~/Scripts/knockout-mapping.js")
                
                .Include("~/Scripts/knockout.validation.min.js")
                .Include("~/Scripts/DataTables/datatables.min.js")
                .Include("~/Scripts/bootstrap-select.js")
                .Include("~/Scripts/bootstrap-datepicker.min.js")
                .Include("~/Scripts/toastr.min.js"));
             */
            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/Scripts/app/Main.js")
                .Include("~/Scripts/app/Book.js"));
        }
    }
}
