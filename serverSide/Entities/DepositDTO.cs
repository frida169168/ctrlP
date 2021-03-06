﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DepositDTO
    {
        public int depositId { get; set; }
        public Nullable<int> userId { get; set; }
        public string userName { get; set; }
        public string userTz { get; set; }
        public Nullable<System.DateTime> depositDate { get; set; }
        public Nullable<double> depositAmount { get; set; }
    }
}
