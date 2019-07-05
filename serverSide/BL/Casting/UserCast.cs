using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    
    public class UserCast
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static UserDTO CastToDTO(User user)
        {
            //List<DepositDTO> depositsListDTO = new List<DepositDTO>();
            //List<PrintHistoryDTO> printHistoryDTO = new List<PrintHistoryDTO>();
            //List<int> specsId = new List<int>();
            //// ההפקדות של כל משתמש
            // db.Deposits.Where(d => d.userId == user.userId)
            //    .ToList().ForEach(x => depositsListDTO.Add(DepositCast.CastToDTO(x)));
            ////המרת רשימת היסטורית הדפסות  של  משתמש
            //db.PrintHistories.Where(p => p.userId == user.userId).ToList()
            //    .ForEach(f => printHistoryDTO.Add(PrintHistoryCast.CastToDTO(f)));
            //// קודי התממחיות של המשתמש?????????????????????????????????????????????????
            //db.UserToSpecs.Where(i => i.userId == user.userId).ToList().ForEach(f=> specsId.Add(f.specId));
            return new UserDTO() {
                userId = user.userId,
                userTz = user.userTz,
                userName = user.userName,
                entityTypeId = (eType)user.entityTypeId
               
            }; 
        }
        public static User CastToDAL(UserDTO user)
        {
            //List<Deposit> depositsListDAL = new List<Deposit>();
            //List<PrintHistory> printHistoryDAL = new List<PrintHistory>();
           
            return new User() {
                userId = user.userId,
                userTz = user.userTz,
                userName = user.userName,
                entityTypeId = (int)user.entityTypeId,
                //איך ממירים בחזרה את רשימת קודי ההתמחיות<<<<<<<<<<<<
                
            };
        }
    }
}
