using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using BL;
using DTO;
namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/printHistory")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PrintHistoryController : ApiController
    {
        [HttpPost]
        [Route("printHistory-by-user")]
        public HttpResponseMessage GetPrintHistoryByUSer(UserDTO user)
        {
            List<PrintHistoryDTO> prints = new List<PrintHistoryDTO>();
            prints = PrintHistoryLogic.GetPrintHistory(user.userId);
            if (prints != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, prints);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

        }
        [HttpPost]
        [Route("add-printing")]
        public HttpResponseMessage AddPrinting(PrintHistoryDTO print)
        {
            PrintHistoryLogic.AddPrint(print);
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}