using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DAL;
using DTO;
using BL;

namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/User")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        //[HttpPost]
        //public string k([FromBody]object name)
        //{ return "ppppadsfdsfsdf"; }
        [HttpPost]
        [Route("login")]///לשנות שיקבל USER

        public HttpResponseMessage Login(UserDTO user)
        {
            UserDTO userDTO =UserLogic.Login(user.userTz);

            if (userDTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, userDTO);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
        //[HttpPost]
        //[Route("a")]///לשנות שיקבל USER

        //public HttpResponseMessage a()
        //{
          
        //        return Request.CreateResponse(HttpStatusCode.OK);
        
        //}
        //[HttpPost]
        //[Route("GetAllUsers")]///לשנות שיקבל USER

        //public HttpResponseMessage getg(User user)
        //{

        //    return Request.CreateResponse(HttpStatusCode.OK, new List<UserDTO>() { new UserDTO() { userId = 1, userName = "chana" }, new UserDTO() { userId = 2, userName = "ggg" } });
        //}
        [HttpGet]
        [Route("getStudents")]
        public HttpResponseMessage getStudents()
        {
            return Request.CreateResponse(HttpStatusCode.OK, UserLogic.getStudents());
        }
        [HttpPost]
        [Route("getBalance")]
        public HttpResponseMessage getBalanceByUser(User user)
        {
            return Request.CreateResponse(HttpStatusCode.OK,UserLogic.getBalanceByUser(user));
        }
    }
}

