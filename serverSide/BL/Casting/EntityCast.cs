using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Casting
{
    public class EntityCast
    {
        public EntityTypeDTO CastToDTO(EntityType entity)
        {
            return new EntityTypeDTO() { entityTypeId = (DTO.Type)entity.entityTypeId, entityTypeDescription = entity.entityTypeDescription };
        }
        public EntityType CastToDAL(EntityTypeDTO entity)
        {
            return new EntityType() { entityTypeId =(int)entity.entityTypeId, entityTypeDescription = entity.entityTypeDescription };
        }
    }
}
