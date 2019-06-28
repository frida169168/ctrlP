using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using BL.Casting;
using System.ComponentModel.DataAnnotations;

namespace BL
{
    public class PrintHistoryLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        //מציג את היסטורית ההדפסות
        public static List<PrintHistoryDTO> GetPrintHistory(int userId)
        {
            List<PrintHistoryDTO> printHistories = new List<PrintHistoryDTO>();
            db.PrintHistories.Where(i => i.userId ==userId).ToList().ForEach(w => printHistories.Add(PrintHistoryCast.CastToDTO(w)));
            return printHistories;
        }
        //מוסיף הדפסה חדשה
        public static void AddPrint(PrintHistoryDTO printHistory)
        {
            db.PrintHistories.Add(PrintHistoryCast.CastToDAL(printHistory));
            db.SaveChanges();
        }
        //מציג נתוני הדפסות של  משתמש בתאריך מסוים 
        //public static List<PrintHistoryDTO> GetPrintHistory(int userId,DataType data)
        //     {
      //  ???????????
        //     }
    }
}