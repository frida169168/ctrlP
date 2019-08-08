using DAL;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
 public   class readSpecFromExcel
    {
        public static controlPrintEntities db = new controlPrintEntities();
        public static void readExeclLogic()
        {

            using (SpreadsheetDocument spreadSheetDocument = SpreadsheetDocument.Open(@"D:\spec.xlsx", false))
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
                    string specName = row.Descendants<Cell>().ElementAt(0).InnerText;
                    string specCode = row.Descendants<Cell>().ElementAt(1).InnerText;

                    if (row == rows.ElementAt(0) || specName == "" || specCode == "") {
                        
                        continue;

                    }
                    Console.WriteLine("do row: " + row.InnerText);

                    Specialization specialization = new Specialization();
                    specialization.specName = specCode;
                    specialization.specName = specialization.specName + " " + specName;
                    SharedStringTablePart stringTablePart = spreadSheetDocument.WorkbookPart.SharedStringTablePart;
                    string value = row.Descendants<Cell>().ElementAt(0).InnerText;

                    if (row.Descendants<Cell>().ElementAt(0).DataType != null && row.Descendants<Cell>().ElementAt(0).DataType.Value == CellValues.SharedString)
                    {
                        specialization.specName = "help";
                         //specialization.specName= stringTablePart.SharedStringTable.ChildElements[Int32.Parse(value)].InnerText;
                         //specialization.specName = row.Descendants<Cell>().ElementAt(0).InnerText.Skip(30).ToString();
                    }
                

                    db.Specializations.Add(specialization);
                    db.SaveChanges();
                }

            }

        }
    }
}
            //            specialization.specName= stringTablePart.SharedStringTable.ChildElements[Int32.Parse(value)].InnerText.Skip(30).ToString() ;
