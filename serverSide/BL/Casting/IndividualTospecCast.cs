using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    class IndividualTospecCast
    {
        public IndividualToSpecDTO CastToDTO(IndividualToSpec individualTospec)
        {
            return new IndividualToSpecDTO() { individualId = individualTospec.individualId, specId = individualTospec.specId };
         }
        public IndividualToSpec CastToDAL(IndividualToSpecDTO individualTospec)
        {
            return new IndividualToSpec() { individualId = individualTospec.individualId, specId = individualTospec.specId };
        }
    }
}
