using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
namespace BL
{
    public class readExecl
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static void readExeclLogic()
        {
            string x=ConfigurationManager.AppSettings["PathStudentExcel"];
            using (SpreadsheetDocument spreadSheetDocument = SpreadsheetDocument.Open(@"../WebServiceControlPrint/uploads/x", true))
            {                
                WorkbookPart workbookPart = spreadSheetDocument.WorkbookPart;
                IEnumerable<Sheet> sheets = spreadSheetDocument.WorkbookPart.Workbook.GetFirstChild<Sheets>().Elements<Sheet>();
                string relationshipId = sheets.First().Id.Value;
                WorksheetPart worksheetPart = (WorksheetPart)spreadSheetDocument.WorkbookPart.GetPartById(relationshipId);
                Worksheet workSheet = worksheetPart.Worksheet;
                SheetData sheetData = workSheet.GetFirstChild<SheetData>();
                IEnumerable<Row> rows = sheetData.Descendants<Row>();
                foreach (Row row in rows) //this will also include your header row...
                {
                    if (row == rows.ElementAt(0))
                        continue;
                    User user = new User();
                    int r = row.Descendants<Cell>().Count();
                    user.userTz = (row.Descendants<Cell>().ElementAt(0).InnerText);
                    user.userName = row.Descendants<Cell>().ElementAt(5).InnerText + " " + row.Descendants<Cell>().ElementAt(6).InnerText;
                    user.entityTypeId = 3;
                    db.Users.Add(user);
                    UserToSpec userToSpec = new UserToSpec();

               //     userToSpec.userId = db.Users.FirstOrDefault(y => y.userId == user.userId).userId;
                    if (row.Descendants<Cell>().ElementAt(0).InnerText != null)
                    {
                        List<string> specIds = row.Descendants<Cell>().ElementAt(7).InnerText.Split(',').ToList();
                        specIds.ForEach(s => { user.UserToSpecs.Add(new UserToSpec { specId =Int32.Parse(s.Trim()), }); });   
                    }

                    db.SaveChanges();
                }

            }

        }


    }
}

