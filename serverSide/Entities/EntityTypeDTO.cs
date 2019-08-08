using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public enum Type { staff=1,teacher,student}
    public class EntityTypeDTO
    {
        public Type entityTypeId { get; set; }
        public string entityTypeDescription { get; set; }
    }
}
