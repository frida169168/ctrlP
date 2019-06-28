using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class PrintHistoryDTO
    {
        public int printHistoryId { get; set; }
        public Nullable<int> userId { get; set; }
        public Nullable<System.DateTime> datePrint { get; set; }
        public Nullable<double> costPrint { get; set; }
        public Nullable<bool> isColorFull { get; set; }
        public Nullable<int> sumOfPages { get; set; }
        public string printerName { get; set; }
    }
}
