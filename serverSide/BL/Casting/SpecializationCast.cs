using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    public class SpecializationCast
    {
        public static controlPrintEntities db = new controlPrintEntities();

        public static SpecializationDTO CastToDTO(Specialization specialization)
        {
            List<int> userId = new List<int>();
            db.UserToSpecs.Where(i => i.specId==specialization.specId).ToList().ForEach(f => userId.Add(f.userId));
            return new SpecializationDTO()
            {
                specId = specialization.specId,
                specName = specialization.specName,
                specKindId = specialization.specKindId
            };
        }
        public static Specialization CastToDAL(SpecializationDTO specialization)
        {
            return new Specialization() { specId = specialization.specId,
                specName = specialization.specName,
                specKindId = specialization.specKindId,
            };
        }
    }
}
