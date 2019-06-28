using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace BL.Casting
{
    public class PrintHistoryCast
    {

        public static PrintHistoryDTO CastToDTO(PrintHistory printHistory)
        {
            return new PrintHistoryDTO() { printHistoryId = printHistory.printHistoryId,userId = printHistory.userId,datePrint = printHistory.datePrint,costPrint = printHistory.costPrint,isColorFull = printHistory.isColorFull,sumOfPages = printHistory.sumOfPages,printerName = printHistory.printerName };
         }
        public static PrintHistory CastToDAL(PrintHistoryDTO printHistory)
        {

            return new PrintHistory() { printHistoryId = printHistory.printHistoryId, userId = printHistory.userId, datePrint = printHistory.datePrint, costPrint = printHistory.costPrint, isColorFull = printHistory.isColorFull, sumOfPages = printHistory.sumOfPages, printerName = printHistory.printerName };
        }
    }
}
