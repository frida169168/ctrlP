using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL.Casting;
using DAL;
using DTO;

namespace BL
{
    public static class DepositLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        ////מחזיר רשימת הפקדות לפי ת"ז
        //public static List<DepositDTO> GetDeposits(int userId)
        //{
        //    List<DepositDTO> deposits = new List<DepositDTO>();
        //    db.Deposits.Where(i => i.userId == userId).ToList().ForEach(w => deposits.Add(DepositCast.CastToDTO(w)));
        //    return deposits;
        //}


        public static List<DepositDTO> GetDeposits()
        {
            db = new controlPrintEntities();
            List<DepositDTO> deposits = new List<DepositDTO>();
            db.Deposits.ToList().ForEach(w => deposits.Add(DepositCast.CastToDTO(w)));

            deposits.ForEach(d => { User u2 = db.Users.Where(u => u.userId == d.userId).FirstOrDefault(); d.userName = u2.userName; d.userTz = u2.userTz; });
            return deposits;
        }

        public static double? NewDeposit(DepositDTO depositDTO)
        {

            db.Deposits.Add(DepositCast.CastToDAL(depositDTO));
            try
            {
                db.SaveChanges();
                return depositDTO.depositAmount;
            }

            catch
            {
                return 0;
            }
        }
        public static void deleteDeposit(DepositDTO depositDTO)
        {
            db.Deposits.Remove(db.Deposits.First(d => d.depositId == depositDTO.depositId));
            db.SaveChanges();
        }

    }
}
