using PrinterQueueWatch;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Printing;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
namespace Logic
{
    public class CatchPrintJobs
    {
        static PrinterQueueWatch.PrinterMonitorComponent PrinterMonitor;
        /// <summary>
        ///תפיסת אירוע הדפסה או מחיקה   
        /// </summary>
        public CatchPrintJobs()
        {
            PrinterMonitor = new PrinterMonitorComponent();
            PrinterQueueWatch.PrintServer ps = new PrinterQueueWatch.PrintServer(ConfigurationManager.AppSettings["ServerName"]);
            ps.Printers.ForEach(p => PrinterMonitor.AddPrinter(p.PrinterName));
            PrinterMonitor.JobAdded += PrinterMonitor_JobAdded;
            PrinterMonitor.JobDeleted += PrinterMonitor_JobDeleted;
        }

        private static void PrinterMonitor_JobDeleted(object sender, PrintJobEventArgs e)
        {
            Job.PromotionalAccount(e.PrintJob.JobId);
        }

        /// <summary>
        /// טיפול בארוע של הדפסה
        /// </summary>
        private static void PrinterMonitor_JobAdded(object sender, PrintJobEventArgs e)
        { 
            Job.PauseJob(e.PrintJob.JobId);
            Job job = new Job(e.PrintJob);
            string response=job.CheckPrintPermissions();
            if (response == "OK")
            {
                Job.ResumeJob(e.PrintJob.JobId);
            }
            else
            {
                e.PrintJob.Cancel();
            }
            job.OpenWinForm(e.PrintJob.MachineName, response);     
        }
    }
} 
//while (e.PrintJob.Spooling) ;
            //if (!e.PrintJob.Printed)
            //{
            //    job.PromotionalAccount();
            //}