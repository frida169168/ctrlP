using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using BL.Casting;
namespace BL
{//גמור!!!!!!!!!!!!!!!!!!
    public class SizeOfPageLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static List<SizeOfPageDTO> GetSizeOfPages()
        {
            List<SizeOfPageDTO> ls = new List<SizeOfPageDTO>();
          //  db.SizeOfPages.ToList().ForEach(s => ls.Add(SizeOfPageCast.CastToDTO(s)));
            return ls;
        }
        //add a new size of page and return its id
        public static int AddSize(string sizeName)
        {
            //db.size.

            List<SizeOfPage> sizeList = db.SizeOfPages.ToList();
            if (sizeList.FirstOrDefault(s=> s.sizeName == sizeName) != null)
                return 0;
            SizeOfPage s1 = new SizeOfPage() { sizeName = sizeName };
            sizeList.Add(s1);
            db.SaveChanges();
            return s1.sizeId;
            //למה מחזיר id
        }
        public static void UpdateSize(int sizeId, string newName)//לקבל ככה או אוביקט????????????????????
        {            
            db.SizeOfPages.Where(i => i.sizeId == sizeId).FirstOrDefault().sizeName = newName;
            db.SaveChanges();
        }       
        public static void DeleteSize(int sizeId)
        {

            db.SizeOfPages.Remove(db.SizeOfPages.Where(i => i.sizeId == sizeId).FirstOrDefault());
            db.SaveChanges();
        }
    }
}
