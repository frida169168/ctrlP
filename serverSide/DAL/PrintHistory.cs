//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class PrintHistory
    {
        public int printHistoryId { get; set; }
        public Nullable<int> userId { get; set; }
        public Nullable<System.DateTime> datePrint { get; set; }
        public Nullable<double> costPrint { get; set; }
        public Nullable<bool> isColorFull { get; set; }
        public Nullable<int> sumOfPages { get; set; }
        public string printerName { get; set; }
    
        public virtual User User { get; set; }
    }
}
