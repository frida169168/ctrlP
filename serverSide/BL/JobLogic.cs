using DAL;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class JobLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static double? CalaulateJob(Job job)
        {            
            string jobSizeInWords="A3";//המרה למילים
            int? sizeId = db.SizeOfPages.FirstOrDefault(s => s.sizeName == jobSizeInWords).sizeId;
            if (sizeId != null)
            {
                Price price = db.Prices.FirstOrDefault(p => p.sizeId == sizeId);
                double? finalprice=job.isColorFull != false ? price.priceColorFull:price.priceBlackWhite;
                finalprice *= job.copy + job.numOfPages;
                return finalprice;
            }
            return null;  
        }
    }
}
