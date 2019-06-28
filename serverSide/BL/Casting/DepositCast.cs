using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    public static class DepositCast
    {        
        public static DepositDTO CastToDTO(Deposit deposit)
        {
            return new DepositDTO() { depositId =deposit.depositId, userId=deposit.userId, depositDate=deposit.depositDate, depositAmount = deposit.depositAmount };
        }
        public static Deposit CastToDAL(DepositDTO deposit)
        {
            return new Deposit() {depositId =deposit.depositId, userId=deposit.userId, depositDate=deposit.depositDate, depositAmount = deposit.depositAmount };
        }
    }
}
