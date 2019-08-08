using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;

namespace WebServiceControlPrint.Controllers
{

    [RoutePrefix("api/specialization")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SpecializationController : ApiController
    {

        [HttpGet]
        [Route("get-specs")]

        public HttpResponseMessage GetSpecs()
        {
            List<SpecializationDTO> dTO = new List<SpecializationDTO>();
            dTO = BL.SpecializationLogic.GetSpecializationList();
            if (dTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, dTO);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
        [HttpPost]
        [Route("get-details-spec")]

        public HttpResponseMessage GetDetailsSpec(int id)
        {
            SpecializationDTO dTO = new SpecializationDTO();
            dTO = BL.SpecializationLogic.GetDetailsSpecialization(id);
            if (dTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, dTO);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
        //[HttpPost]
        //[Route("add-specialization")]
        //public HttpResponseMessage AddeSpecialization(SpecializationDTO specializationDTO)
        //{

        //    BL.SpecializationLogic.AddSpecialization(specializationDTO);
        //    if (specializationDTO != null)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.OK);
        //    }
        //    return Request.CreateResponse(HttpStatusCode.NotFound);

        //}
        //[HttpPost]
        //[Route("removeSpecialization")]
        //public HttpResponseMessage RemoveSpecialization(SpecializationDTO specializationDTO)
        //{
        //    //מחזירים OK ומתי FAךSE מחזירים פונקציה האם נכון מתי   VOID מה עושים עם
        //    // SpecializationDTO dTO = new SpecializationDTO();
        //    // dTO=BL.SpecializationLogic.AddSpecialization(specializationDTO)
        //    BL.SpecializationLogic.RemoveSpecialization(specializationDTO);
        //    if (specializationDTO != null)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.OK);
        //    }
        //    return Request.CreateResponse(HttpStatusCode.NotFound);

        //}
    }

}

