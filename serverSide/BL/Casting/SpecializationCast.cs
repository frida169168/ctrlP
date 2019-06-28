using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{//<><><:(><?><..>
    public class SpecializationCast
    {
        public static controlPrintEntities db = new controlPrintEntities();

        public static SpecializationDTO CastToDTO(Specialization specialization)
        {
            List<int> userId = new List<int>();
            // קודי התלמידים בהתמחות זו?????????????????????????????????????????????????
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
            //איך ממירים בחזרה את רשימת קודי התלמידים<<<?<<<<<<<<<?
            return new Specialization() { specId = specialization.specId,
                specName = specialization.specName,
                specKindId = specialization.specKindId,
            };
        }
    }
}
