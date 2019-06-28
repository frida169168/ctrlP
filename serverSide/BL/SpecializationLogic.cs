using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL.Casting;
using BL;
using DTO;

namespace BL
{
    public class SpecializationLogic
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static List<SpecializationDTO> GetSpecializationList()
        {
            List<SpecializationDTO> specializations = new List<SpecializationDTO>();
           db.Specializations.ToList().ForEach(f => specializations.Add( SpecializationCast.CastToDTO(f)));
            return specializations;
        }
        public static  SpecializationDTO GetDetailsSpecialization(int id)
        {
            return SpecializationCast.CastToDTO( db.Specializations.Where(i=>i.specId==id).FirstOrDefault());
        }
        public static  void AddSpecialization( SpecializationDTO specializationDTO)
        {
            db.Specializations.Add(SpecializationCast.CastToDAL(specializationDTO));
        }
        public static void RemoveSpecialization(SpecializationDTO specializationDTO)
        {
            db.Specializations.Remove(SpecializationCast.CastToDAL(specializationDTO));
        }

        //public void ChangeSpecialization(SpecializationDTO OldspecializationDTO, SpecializationDTO NewspecializationDTO)
        //{
        ////????????????? 
        //}

                  
    }
}
