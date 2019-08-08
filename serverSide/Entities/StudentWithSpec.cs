using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace Entities
{
    public class StudentWithSpecDTO
    {
        public string userTz { get; set; }
        public int userId { get; set; }
        public string userName { get; set; }

        public List<SpecializationDTO> specs { get; set; }

    }

}
