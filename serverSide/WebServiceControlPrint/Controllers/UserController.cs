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
using Entities;

namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/user")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("login")]

        public HttpResponseMessage Login(UserDTO userTz)
        {
            UserDTO user = UserLogic.Login(userTz.userTz);

            if (user != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, user);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }

        [HttpPost]
        [Route("get-balance")]
        public HttpResponseMessage GetBalanceByUser(UserDTO user)
        {
            return Request.CreateResponse(HttpStatusCode.OK, UserLogic.getBalanceByUser(user));
        }
        [HttpGet]
        [Route("get-students")]
        public HttpResponseMessage GetStudents()
        {
            return Request.CreateResponse(HttpStatusCode.OK, UserLogic.GetStudents());
        }

        [HttpGet]
        [Route("get-students-with-specs")]
        public HttpResponseMessage GetStudentsWithSpecs()
        {
            return Request.CreateResponse(HttpStatusCode.OK, UserLogic.GetStudentsWithSpecs());
        }

        [HttpPost]
        [Route("allowd-to-print")]
        public HttpResponseMessage allowdToPrint(Job job)
        {

            UserDTO user = UserLogic.Login(job.userTz);
            double? AmountToPay, balance;
            if (user != null)
            {
                balance = UserLogic.getBalanceByUser(user);
                AmountToPay = JobLogic.CalaulateJob(job);
                if (AmountToPay - balance >= 0)
                {
                    PrintHistoryLogic.AddPrint(new PrintHistoryDTO()
                    {
                        userId = user.userId,
                        datePrint = DateTime.Now,
                        costPrint = AmountToPay,
                        isColorFull = job.isColorFull,
                        sumOfPages = job.numOfPages,
                        printerName = job.printerName

                    });
                    return Request.CreateResponse(HttpStatusCode.OK, "OK");
                }
                return Request.CreateResponse(HttpStatusCode.BadRequest, "Small_balance");
            }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "User_doesnt_exist");
        }
        
    }
}