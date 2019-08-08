using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public  class Job
    {
        public int jobId { get; set; }
        public string  userTz { get; set; }
        public int copy { get; set; }
        public int numOfPages { get; set; }
        public byte size { get; set; }
        public bool isColorFull { get; set; }
        public string printerName { get; set; }

    }
}
