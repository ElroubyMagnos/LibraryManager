using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryCore.Models
{
    public class DocumentsFile
    {
        public int ID { get; set; }
        public byte[] FileItself { get; set; }
        public string NameOfFile { get; set; }
        public int RequestID { get; set; }
        public int PrintingCountTime {get;set;}
        public PrintRequest PrintRequest { get; set; }
    }
}
