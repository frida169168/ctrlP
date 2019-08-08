using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BL;
namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/user-to-spec")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserToSpecController : ApiController
    {
        [HttpGet]
        [Route("get-user-to-specs")]
        public HttpResponseMessage GetUserToSpecs()
        {
            return Request.CreateResponse(HttpStatusCode.OK, UserToSpecLogic.GetUserToSpecs());
        }
    }
}
