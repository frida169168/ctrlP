using ClassLibrary1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic_winService
{
    class Program
    {
        static void Main(string[] args)
        {
            Class1.RunAsync().GetAwaiter().GetResult();
            Console.Read();

        }


    }
}
