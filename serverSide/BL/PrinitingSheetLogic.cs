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

        public static void AddSheet(PrintingSheetDTO sheet)
        {
            List<Price> ls = new List<Price>();
            db.SizeOfPages.Add(SizeOfPageCast.CastToDAL(sheet.SizeOfPage));
            db.Prices.Add(PriceCast.CastToDAL(sheet.price));
   //         sheet.prices.ToList().ForEach(s => ls.Add(PriceCast.CastToDAL(s)));
            db.Prices.AddRange(ls);
            db.SaveChanges();
        }
        public static void DeleteSheet(PrintingSheetDTO sheet)
        {
            List<Price> ls = new List<Price>();
            db.SizeOfPages.Remove(SizeOfPageCast.CastToDAL(sheet.SizeOfPage));
            // sheet.price.ToList().ForEach(s => ls.Add(PriceCast.CastToDAL(s)));
            db.Prices.Remove(PriceCast.CastToDAL(sheet.price));
            db.SaveChanges();
        }
        /// <summary>
        /// האם זה נכון?????????????????????????????????????????
        /// </summary>
        /// <param name="sizeId"></param>
        //public static void DeleteSheet(int sizeId) // משנים לאיךDELETE
        //{
        //    //PrintingSheetDTO sheetDTO=db.
        //    List<Price> ls = new List<Price>();

        //db.SizeOfPages.Remove(db.SizeOfPages.FirstOrDefault(i=>i.sizeId== sizeId));
        //    // sheet.price.ToList().ForEach(s => ls.Add(PriceCast.CastToDAL(s)));
        //    db.Prices.Remove(db.Prices.FirstOrDefault(p=>p.sizeId==sizeId));
        //    db.SaveChanges();
        //}
        public static List<PrintingSheetDTO> GetSheets()
        {    
            
            List<PrintingSheetDTO> sheets = new List<PrintingSheetDTO>();           
            
            db.SizeOfPages.ToList().ForEach(w =>
            {
                var t = new PrintingSheetDTO() { SizeOfPage = new SizeOfPageDTO() { sizeId = w.sizeId, sizeName = w.sizeName } };
              var d=  db.Prices.ToList().FirstOrDefault(x => x.sizeId == w.sizeId);
                t.price=PriceCast.CastToDTO(d);
                sheets.Add(t);
            });

            return sheets;
        }
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
        public static void UpdateSheet(PriceDTO priceDTO)
        {
            //    ////
            //    SizeOfPage sizeOfPage = db.SizeOfPages.Where
            //            (s => s.sizeId == sheetDTO.SizeOfPage.sizeId && s.Prices
            //    .Where(p => p.sizeId == s.sizeId).FirstOrDefault().isColorFull == 
            //    sheetDTO.prices.Where(p => p.sizeId == s.sizeId).FirstOrDefault().isColorFull).FirstOrDefault();
            //    sizeOfPage.sizeName = sheetDTO.SizeOfPage.sizeName;
            //        db.Prices.Where(p => p.sizeId == sheetDTO.SizeOfPage.sizeId)
            //        .FirstOrDefault();
            //    sizeOfPage.sizeName = sheetDTO.SizeOfPage.sizeName;
            //    db.SaveChanges();
        }


    }
}
