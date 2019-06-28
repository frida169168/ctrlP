using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    public class SpecializationKindCast
    {
        public SpecializationKindDTO CastToDTO(SpecializationKind specializationKind)
        {
            return new SpecializationKindDTO() { specKindId =specializationKind.specKindId, specKindName =specializationKind.specKindName};
        }
        public SpecializationKind CastToDAL(SpecializationKindDTO specializationKind)
        {
            return new SpecializationKind() { specKindId = specializationKind.specKindId, specKindName = specializationKind.specKindName };
        }
    }
}
