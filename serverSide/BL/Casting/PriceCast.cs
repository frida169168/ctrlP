using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
namespace BL.Casting
{
    public  class PriceCast
    {
        public static PriceDTO CastToDTO(Price price)
       {
            return new PriceDTO() { priceBlackWhite=price.priceBlackWhite,priceColorFull=price.priceColorFull,priceId=price.priceId,sizeId=price.sizeId};
        }
        public static Price CastToDAL(PriceDTO price)
        {
            return new Price() { priceBlackWhite = price.priceBlackWhite, priceColorFull = price.priceColorFull, priceId=price.priceId,sizeId=price.sizeId};
        }

       
    }
}
