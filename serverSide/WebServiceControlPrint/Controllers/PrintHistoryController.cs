using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using BL;
using DTO;
namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/PrintHistory")]
    public class PrintHistoryController : ApiController
    {
        [HttpPost]
        [Route("GetPrintHistory")]
        public HttpResponseMessage GetPrintHistory(UserDTO user)
        {
            List<PrintHistoryDTO> prints = new List<PrintHistoryDTO>();
            prints = PrintHistoryLogic.GetPrintHistory(user.userId);
            if (prints != null)
            { 
            return Request.CreateResponse(HttpStatusCode.OK,prints);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
         
        }
        [HttpPost]
        [Route("AddPrint/{UserId}")]
        public HttpResponseMessage AddPrint(PrintHistoryDTO print )
        {
            PrintHistoryLogic.AddPrint(print);
           
                return Request.CreateResponse(HttpStatusCode.OK);
           //     return Request.CreateResponse(HttpStatusCode.NotFound);
  
        }
    }
}