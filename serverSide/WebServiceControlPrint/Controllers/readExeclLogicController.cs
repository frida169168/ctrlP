using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using BL;
namespace WebServiceControlPrint.Controllers
{
    //[RoutePrefix("api/read-excel")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    //public class readExeclLogicController : ApiController
    //{
    //    //[HttpPost]
    //    //[Route("readExcel")]

    //    //public HttpResponseMessage readExcel()
    //    //{
    //    //    BL.readSpecFromExcel.readExeclLogic();
    //    //    BL.readExecl.readExeclLogic();

    //    //    return Request.CreateResponse(HttpStatusCode.OK);
    //    //}

    //    //[HttpPost]
    //    //[Route("test")]

    //    //public string test()
    //    //{
    //    //    var file = HttpContext.Current.Request.Files.Count > 0 ?
    //    //HttpContext.Current.Request.Files[0] : null;
    //    //    string fileName;

    //    //    if (file != null && file.ContentLength > 0)
    //    //    {
    //    //         fileName = Path.GetFileName(file.FileName);
    //    //        if (!file.FileName.EndsWith(".xlsx"))
    //    //            return null;
    //    //        var path = Path.Combine(
    //    //            HttpContext.Current.Server.MapPath("~/uploads"),
    //    //            fileName
    //    //        );
                
    //    //        file.SaveAs(path);
    //    //    }

    //    //    return file != null ? "/uploads/" + file.FileName : null;
    //    //}
        
    //}
}
