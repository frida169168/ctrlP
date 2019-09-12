using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
using BL.Casting;
namespace BL
{
    public class PriceLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();

        public static List<PriceDTO> GetPrices()//איך  להוסיף מחיר לשני הסוגים
        {
            List<PriceDTO> ls = new List<PriceDTO>();
            db.Prices.ToList().ForEach(s => ls.Add(PriceCast.CastToDTO(s)));
            return ls;
        }
        public static void AddPrice(int sizeId, PriceDTO price)//איך  להוסיף מחיר לשני הסוגים
        {
            price.sizeId = sizeId;
            db.Prices.Add(PriceCast.CastToDAL(price));
            db.SaveChanges();
        }
        public static void UpdatePrice(int priceId,float priceBlackWhite ,float  priceColorFull)
        {
            var x = db.Prices.FirstOrDefault(p => p.priceId == priceId);
            x.priceBlackWhite = priceBlackWhite;
            x.priceColorFull = priceColorFull;
            db.SaveChanges();
        }
    }
}