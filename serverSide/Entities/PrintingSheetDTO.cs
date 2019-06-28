using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class PrintingSheetDTO
    {
        public SizeOfPageDTO SizeOfPage { get; set; }

        public PriceDTO price { get; set; }

    }
}
