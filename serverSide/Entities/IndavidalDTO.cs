using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO
{
    public class IndavidalDTO
    {
        public int individualId { get; set; }
        public string individualName { get; set; }
        public int entityTypeId { get; set; }
        // רשימת ההפקדות של כל משתמש
        public List<DepositDTO> depositList  { get; set; }
        // רשימת היסטורית הדפסות של כל משתמש
        public List<PrintHistoryDTO> printHistoryList { get; set; }
    }

}
