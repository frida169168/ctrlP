using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DTO;
namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/Individual/")]
    public class IndividualController : ApiController
    {
        [HttpPost]
        [Route("login/{tz}")]

        public HttpResponseMessage Login(string tz)
        {
            IndavidalDTO indavidalDTO = BL.UserLogic.Login(tz);

            if (indavidalDTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, indavidalDTO);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
    }
}

