using BL;
using DTO;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/PrintingSheet")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PrintingSheetController : ApiController
    {
      
        [HttpPost]
        [Route("AddSheet/{printingSheet}")]
        public HttpResponseMessage AddSheet(PrintingSheetDTO printingSheet)
        {

      PrintingSheetLogic.AddSheet(printingSheet);
            return Request.CreateResponse(HttpStatusCode.OK);

        }
        
        [HttpPost]
        [Route("CalaulateJob")]
        public HttpResponseMessage AddSheet(Job job)
        {

            return Request.CreateResponse(HttpStatusCode.OK);

        }
        [HttpPost]
        [Route("RemoveSheet")]
        public HttpResponseMessage RemoveSheet(int sheetId)
        {

<<<<<<< HEAD
           // PrintingSheetLogic.DeleteSheet(sheetId);
=======
            //PrintingSheetLogic.DeleteSheet(sheetId);
>>>>>>> a5991d401dbeb421095e988caae21634ccd515f3
            return Request.CreateResponse(HttpStatusCode.OK);

        }
        [HttpPost]
        [Route("UpdateSheet/{printingSheet}")]
        public HttpResponseMessage UpdateSheet(PrintingSheetDTO printingSheet)
        {

            //PrintingSheetLogic.UpdateSheet(printingSheet);
            return Request.CreateResponse(HttpStatusCode.OK);

        }
       [HttpGet]
        [Route("GetSheets")]
        public HttpResponseMessage GetSheets()
        {
            List<PrintingSheetDTO> printingSheetDTOs = new List<PrintingSheetDTO>();
            printingSheetDTOs = PrintingSheetLogic.GetSheets();
            if (printingSheetDTOs != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, printingSheetDTOs);

            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }   
    }
}
