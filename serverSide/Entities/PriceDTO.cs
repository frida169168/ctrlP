using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
    public class PriceDTO
    {
        public int priceId { get; set; }
        public Nullable<int> sizeId { get; set; }
        public double ? priceBlackWhite { get; set; }
        public double? priceColorFull { get; set; }

    } 
}
