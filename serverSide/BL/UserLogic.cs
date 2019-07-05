using System;
using System.Collections.Generic;
using System.Linq;
using DTO;
using BL.Casting;
using DAL;

namespace BL
{
    //גמור:)
    public static class UserLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static UserDTO Login(string tz)
        {
            User user = db.Users.FirstOrDefault(i => i.userTz == tz);
            if (user == null)
                return null;
            return UserCast.CastToDTO(user);
        }

        public static double? getBalanceByUser(User user)
        {
            if (user != null)
            {
                //db.Deposits.ToList();
                double? depositSum = db.Users.FirstOrDefault(u => u.userId == user.userId).Deposits.ToList().Sum(d => d.depositAmount);
                double? costPrintSum = db.Users.FirstOrDefault(u => u.userId == user.userId).PrintHistories.ToList().Sum(p => p.costPrint);
                return depositSum - costPrintSum;
            }
            return 0;           

        }

        public static List<UserDTO> getStudents()
        {
            List<UserDTO> users = new List<UserDTO>();
            db.Users.ToList().ForEach(f => users.Add(UserCast.CastToDTO(f)));
            return users.Where(u=>u.entityTypeId!=eType.staff).ToList();
        }
    }
}
