using DAL;
using DTO;
using BL.Casting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class UserToSpecLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static List<UserToSpecDTO> GetUserToSpecs()
        {
            List<UserToSpecDTO> UserToSpecs = new List<UserToSpecDTO>();
            db.UserToSpecs.ToList().ForEach(u => UserToSpecs.Add(UserTospecCast.CastToDTO(u)));
            return UserToSpecs;
        }
    }
}