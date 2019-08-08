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
        //מחזיר רשימת הפקדות לפי ת"ז
        public static List<DepositDTO> GetDeposits(int userId)
        {
            List<DepositDTO> deposits = new List<DepositDTO>();
            db.Deposits.Where(i => i.userId == userId).ToList().ForEach(w => deposits.Add(DepositCast.CastToDTO(w)));
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

    }
}
