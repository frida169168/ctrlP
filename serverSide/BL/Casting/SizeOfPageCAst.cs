using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BL.Casting
{
    public class SizeOfPageCast
    {
        public static SizeOfPageDTO CastToDTO(SizeOfPage sizeOfPage)
        {
            return new SizeOfPageDTO() { sizeId = sizeOfPage.sizeId, sizeName = sizeOfPage.sizeName };
        }
        public static SizeOfPage CastToDAL(SizeOfPageDTO sizeOfPage)
        {
            return new SizeOfPage() { sizeId = sizeOfPage.sizeId, sizeName = sizeOfPage.sizeName };
        }        
    }
}
