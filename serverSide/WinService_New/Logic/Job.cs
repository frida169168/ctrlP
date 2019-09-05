using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Management;
using PrinterQueueWatch;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
namespace Logic
{
    public class Job
    {
        public int JobId { get; set; }
        public string UserTz { get; set; }
        public int Copy { get; set; }
        public int NumOfPages { get; set; }
        public string Size { get; set; }
        public bool IsColorFull { get; set; }
        public string PrinterName { get; set; }

        public Job(PrintJob jobInfo)
        {
            JobId = jobInfo.JobId;
            Copy = jobInfo.Copies;
            NumOfPages = jobInfo.TotalPages;
            Size = jobInfo.PaperKind.ToString();
            PrinterName = jobInfo.PrinterName;
            //SetUserTz(jobInfo.MachineName);
            OpenWinForm(jobInfo.MachineName, null);
            SetIsColorFull(jobInfo.PrinterName);
        }

        //public void SetUserTz(string machineName)
        //{//to do :שהניתוב יהיה בAppSeting
        //    string path = @"\\SERVER\New folder\WindowsFormsApp3.exe";
        //    var proc = new Process
        //    {

        //        StartInfo = new ProcessStartInfo
        //        {
        //            FileName = @"C:\Windows\SysWOW64\PsExec.exe",
        //            Arguments = $"psexec  ${machineName}  {path}",
        //            UseShellExecute = false,
        //            RedirectStandardOutput = true,
        //            CreateNoWindow = true
        //        }
        //    };

        //    proc.Start();
        //    proc.WaitForExit();
        //    UserTz = proc.ExitCode.ToString();
        //}


        /// <summary>
        /// בדיקה האם ההדפסה צבעונית או שחור לבן
        /// </summary>
        public void SetIsColorFull(string printerName)
        {
            List<string> colorList = ConfigurationManager.AppSettings["IsColor"].Split(',').ToList();
            foreach (var item in colorList)
            {
                if (printerName.Contains(item))
                    IsColorFull = true;
            }
            IsColorFull = false;
        }

        public void OpenWinForm(string machineName, string message = "")
        {
            string path = ConfigurationManager.AppSettings["PathToWinForm"] + " " + response;

            var proc = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = ConfigurationManager.AppSettings["PathToPsExec"],
                    Arguments = $"psexec -i -s  \\\\{machineName} {path}",
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    CreateNoWindow = true
                }
            };

            proc.Start();
            proc.WaitForExit();
            this.UserTz = proc.ExitCode.ToString();
        }
        public async Task<string> ConnectToServer(string route)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:50502/api");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                StringContent content = new StringContent(JsonConvert.SerializeObject(this), Encoding.UTF8, "application/json");
                HttpResponseMessage response = await client.PostAsync(client.BaseAddress + route, content);
                string str = response.Content.ReadAsStringAsync().Result;
                return JToken.Parse(str).ToString();
            }
        }



      

        public static void PromotionalAccount(int jobId)//מחזירה את הסכום למשתמש שהדפסתו בוטלה
        {//to do :  write function in the server
            Task.Run(() => RunAsync(""));
        }

        public string CheckPrintPermissions()
        {// לשנות את שם הפונקציה בserver
            return Task.Run(() => RunAsync("/user/check-print-permissions")).Result;
        }

        public static void PauseJob(int jobId)
        {
            string searchQuery = "SELECT * FROM Win32_PrintJob where JobId=" + jobId;

            /*searchQuery can also be mentioned with where Attribute,
                but this is not working in Windows 2000 / ME / 98 machines 
                and throws Invalid query error*/
            ManagementObjectSearcher searchPrintJobs =
                      new ManagementObjectSearcher(searchQuery);
            ManagementObjectCollection prntJobCollection = searchPrintJobs.Get();
            foreach (ManagementObject prntJob in prntJobCollection)
            {
                prntJob.InvokeMethod("Pause", null);
            }
        }

        public static void ResumeJob(int jobId)
        {
            string searchQuery = "SELECT * FROM Win32_PrintJob where JobId=" + jobId;

            /*searchQuery can also be mentioned with where Attribute,
                but this is not working in Windows 2000 / ME / 98 machines 
                and throws Invalid query error*/
            ManagementObjectSearcher searchPrintJobs =
                      new ManagementObjectSearcher(searchQuery);
            ManagementObjectCollection prntJobCollection = searchPrintJobs.Get();
            foreach (ManagementObject prntJob in prntJobCollection)
            {
                prntJob.InvokeMethod("Resume", null);
            }
        }
    }
}
