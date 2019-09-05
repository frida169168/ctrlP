using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebServiceControlPrint.Controllers
{
    [RoutePrefix("api/deposit")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DepositsController : ApiController
    {
        //    [HttpPost]
        //    [Route("get-deposits-by-userID")]
        //    public HttpResponseMessage GetDeposit([FromBody]int userlId)
        //    {
        //        List<DepositDTO> deposits = new List<DepositDTO>();
        //        deposits = DepositLogic.GetDeposits(userlId);
        //        if (deposits != null)
        //        {
        //            return Request.CreateResponse(HttpStatusCode.OK, deposits);
        //        }
        //        else
        //        {
        //            return Request.CreateResponse(HttpStatusCode.NotFound);
        //        }
        //    }


        [HttpPost]
        [Route("get-deposits")]
        public HttpResponseMessage GetDeposits()
        {
            List<DepositDTO> deposits = new List<DepositDTO>();
            deposits = DepositLogic.GetDeposits();
            if (deposits != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, deposits);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
        }
        [HttpPost]
        [Route("new-deposit")]
        public HttpResponseMessage NewDeposit(DepositDTO deposit)
        {
            return Request.CreateResponse(HttpStatusCode.OK, DepositLogic.NewDeposit(deposit));
        }
        [HttpPost]
        [Route("deposit-for-students")]
        public HttpResponseMessage DepositForStudents(List<DepositDTO> deposits)
        {
            foreach (var item in deposits)
            {
                DepositLogic.NewDeposit(item);
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
