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

    [RoutePrefix("api/Specialization")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SpecializationController : ApiController
    {
       
        [HttpGet]
        [Route("GetSpecializationList")]

        public HttpResponseMessage GetDetailsSpecialization()
        {
          List< SpecializationDTO >dTO = new List<SpecializationDTO>();
            dTO = BL.SpecializationLogic.GetSpecializationList();
            if (dTO != null&&dTO.Count!=0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, dTO);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
        [HttpPost]
        [Route("GetDetailsSpecialization/{id}")]

        public HttpResponseMessage GetDetailsSpecialization(int id)
        {
            SpecializationDTO dTO = new SpecializationDTO();
            dTO = BL.SpecializationLogic.GetDetailsSpecialization(id);
            if (dTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, dTO);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }
        [HttpPost]
        [Route("AddSpecialization/{specializationDTO}")]
        public HttpResponseMessage AddeSpecialization(SpecializationDTO specializationDTO)
        {
            
            BL.SpecializationLogic.AddSpecialization(specializationDTO);
            if (specializationDTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);

        }
        [HttpPost]
        [Route("RemoveSpecialization/{specializationDTO}")]
public HttpResponseMessage RemoveSpecialization(SpecializationDTO specializationDTO)
        {
            //מחזירים OK ומתי FAךSE מחזירים פונקציה האם נכון מתי   VOID מה עושים עם
            // SpecializationDTO dTO = new SpecializationDTO();
            // dTO=BL.SpecializationLogic.AddSpecialization(specializationDTO)
            BL.SpecializationLogic.RemoveSpecialization(specializationDTO);
            if (specializationDTO != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound);
            
        }
    }

}

