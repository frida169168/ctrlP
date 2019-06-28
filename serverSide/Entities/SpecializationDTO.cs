using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class SpecializationDTO
    {
        public int specId { get; set; }
        public string specName { get; set; }
        public Nullable<int> specKindId { get; set; }
    }
}
