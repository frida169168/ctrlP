using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Size_PriceDTO
    {
        public SizeOfPage SizeOfPage { get; set; }
        public List <Price> prices { get; set; }
        
    }
}
