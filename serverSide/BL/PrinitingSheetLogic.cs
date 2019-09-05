using BL.Casting;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class PrintingSheetLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();

        /// <summary>
        /// הפוקציה מחזירה את רשימת דפי ההדפסה
        /// </summary>
        /// <returns></returns>
        public static List<PrintingSheetDTO> GetSheets()
        {
            List<PrintingSheetDTO> sheets = new List<PrintingSheetDTO>();
            db.SizeOfPages.ToList().ForEach(w =>
            {
                var t = new PrintingSheetDTO() { SizeOfPage = new SizeOfPageDTO() { sizeId = w.sizeId, sizeName = w.sizeName } };
                var d = db.Prices.ToList().FirstOrDefault(x => x.sizeId == w.sizeId);
                t.price = PriceCast.CastToDTO(d);
                sheets.Add(t);
            });
            return sheets;
        }

        /// <summary>
        /// הוספת דף הדפסה חדש 
        /// </summary>
        /// <param name="sheet"></param>
        public static void AddSheet(PrintingSheetDTO sheet)
        {
            List<Price> ls = new List<Price>();
            db.SizeOfPages.Add(SizeOfPageCast.CastToDAL(sheet.SizeOfPage));
            db.Prices.Add(PriceCast.CastToDAL(sheet.price));
            db.Prices.AddRange(ls);
            db.SaveChanges();
        }  

        /// <summary>
        /// עדכון נתוני דף הדפסה קיים
        /// </summary>
        /// <param name="printingSheetDTO"></param>
        public static void UpdateSheet(PrintingSheetDTO printingSheetDTO)
        {
            SizeOfPage size = db.SizeOfPages.FirstOrDefault(s => s.sizeId == printingSheetDTO.SizeOfPage.sizeId);
            Price price = db.Prices.FirstOrDefault(p => p.priceId == printingSheetDTO.price.priceId);
            size.sizeName = printingSheetDTO.SizeOfPage.sizeName;
            price.priceBlackWhite = printingSheetDTO.price.priceBlackWhite;
            price.priceColorFull = printingSheetDTO.price.priceColorFull;
            db.SaveChanges();
        }
        
        /// <summary>
        /// מחיקת דף הדפסה
        /// </summary>
        /// <param name="sizeId"></param>
        public static void DeleteSheet(int sizeId)
        {
            List<Price> ls = new List<Price>();
            db.SizeOfPages.Remove(db.SizeOfPages.FirstOrDefault(i => i.sizeId == sizeId));
            db.Prices.Remove(db.Prices.FirstOrDefault(p => p.sizeId == sizeId));
            db.SaveChanges();
        }
    }
}



//         sheet.prices.ToList().ForEach(s => ls.Add(PriceCast.CastToDAL(s)));
//public static void DeleteSheet(PrintingSheetDTO sheet)
//{
//    List<Price> ls = new List<Price>();
//    db.SizeOfPages.Remove(SizeOfPageCast.CastToDAL(sheet.SizeOfPage));
//    // sheet.price.ToList().ForEach(s => ls.Add(PriceCast.CastToDAL(s)));
//    db.Prices.Remove(PriceCast.CastToDAL(sheet.price));
//    db.SaveChanges();
//}
/// <summary>
/// האם זה נכון?????????????????????????????????????????
/// </summary>
/// <param name="sizeId"></param>


//public static List<PrintingSheetDTO> GetSheets()
//{
//    List<PrintingSheetDTO> sheets = new List<PrintingSheetDTO>();
//    db.SizeOfPages.ToList().ForEach(w =>
//    {
//        var t = new PrintingSheetDTO() { SizeOfPage = new SizeOfPageDTO() { sizeId = w.sizeId, sizeName = w.sizeName }, prices = new List<PriceDTO>() { } };
//        w.Prices.ToList().ForEach(e => t.prices.Add(new PriceDTO() { priceBlackWhite = e.priceBlackWhite, priceColorFull = e.priceColorFull, priceId = e.priceId, sizeId = e.sizeId }));
//        sheets.Add(t);
//    });

//    return sheets;
//}