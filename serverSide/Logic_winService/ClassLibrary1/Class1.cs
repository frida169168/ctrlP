
using Entities;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Printing;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public class Class1
    {
        private const string URL = "http://localhost:50502/api/User/Login";
    //  private const string DATA =  @"{""object"":{""name"":""michal""}}";

        //public static void Request(Job  job)
        //{
        //    HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URL+ "/login");
        //    request.Method = "POST";
        //    request.ContentType = "application/json";
           

        //    //request.ContentLength = DATA.Length;
        //    // byte[] byteArray = Encoding.UTF8.GetBytes(DATA);
        //    StreamWriter requestWriter = new StreamWriter(request.GetRequestStream(),System.Text.Encoding.ASCII);
        //    //byte[] bytes = Encoding.ASCII.GetBytes(DATA);
        //    //Stream newStream = request.GetRequestStream();

        //   // var byteStr = Encoding.UTF8.GetBytes( new JavaScriptSerializer().Serialize( new Person() { Id=1,Name="pppaaa"}));
        //    //newStream.Write(bytes, 0, bytes.Length);
        //    //requestWriter.Write(DATA);
        //    //newStream.Close();
        //    //requestWriter.Close();
        //    try
        //    {
        //        using (var str = request.GetRequestStream())
        //        { } //    str.Write(byteStr, 0, byteStr.Length);
        //    }
        //    catch (Exception e)
        //    {
        //        Console.WriteLine("Dfgfdg");
        //    }

        //    try
        //    {
        //        WebResponse webResponse = request.GetResponse();
        //        Stream webStream = webResponse.GetResponseStream();
        //        StreamReader responseReader = new StreamReader(webStream);
        //        string response = responseReader.ReadToEnd();
        //        Console.Out.WriteLine(response);
        //        responseReader.Close();
        //    }
        //    catch (Exception e)
        //    {
        //        Console.Out.WriteLine("-----------------");
        //        Console.Out.WriteLine(e.Message);
        //    }

        //}
        string userid;
      
        public void Start()
        {
            PrintServer myPrintServer = new PrintServer(@"\\theServer");
            PrintQueueCollection myPrintQueues = myPrintServer.GetPrintQueues();

            while (true)
            {
                foreach (PrintQueue pq in myPrintQueues)
                {
                    foreach (var job in pq.GetPrintJobInfoCollection())
                    {
                        if (!job.PropertiesCollection.Contains("isVisited"))
                        {
                            job.Pause();//לבדוק שזה לא קורה מידי מהר:)
                            job.PropertiesCollection.Add("isVisited", true);
                            //send message to get the password
                            job.PropertiesCollection.Add("userId", "222");
                            Job currentJob = new Job() { userTz = (string)job.PropertiesCollection["userId"],numOfPages=job.NumberOfPages };
                          //  RunAsync().GetAwaiter().GetResult(); 
                        }





                        //job.PropertiesCollection.Add("user", 123456);
                        //var x = job.PropertiesCollection["user"];
                        //SpotTroubleUsingJobAttributes(job);

                    }
                }
            }

        }

      public  static async Task RunAsync()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:50502/api");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                Job job = new Job { numOfPages=1,jobId=3};

                // HTTP POST
                //var myContent = ;
                ////var buffer = System.Text.Encoding.UTF8.GetBytes(myContent);
                ////var byteContent = new ByteArrayContent(buffer);
                var content = new StringContent(JsonConvert.SerializeObject(job), Encoding.UTF8, "application/json");

                //   HttpResponseMessage response = await client.PostAsync(URL, byteContent);
                HttpResponseMessage response = await client.PostAsync("http://localhost:50502/api/PrintingSheet/CalaulateJob", content);

                if (response.IsSuccessStatusCode)
                {
                    
                    var result = response.Content;

                    // do whatever you need to do here with the returned data //


                }
            }
        }

    }
}
