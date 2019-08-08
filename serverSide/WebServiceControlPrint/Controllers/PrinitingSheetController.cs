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
    [RoutePrefix("api/printing-sheet")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PrintingSheetController : ApiController
    {
      
        [HttpPost]
        [Route("add-sheet")]
        public HttpResponseMessage AddSheet(PrintingSheetDTO printingSheet)
        {

            PrintingSheetLogic.AddSheet(printingSheet);
            return Request.CreateResponse(HttpStatusCode.OK);

        }        
    
        [HttpDelete]
        [Route("remove-sheet/{sizeId}")]
        public HttpResponseMessage RemoveSheet(int sizeId)
        {

            PrintingSheetLogic.DeleteSheet(sizeId);
            return Request.CreateResponse(HttpStatusCode.OK);

        }
        [HttpPost]
        [Route("update-sheet")]
        public HttpResponseMessage UpdateSheet(PrintingSheetDTO printingSheet)
        {

            PrintingSheetLogic.UpdateSheet(printingSheet);
            return Request.CreateResponse(HttpStatusCode.OK);

        }
       [HttpGet]
        [Route("get-sheets")]
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
