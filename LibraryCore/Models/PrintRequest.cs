using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryCore.Models
{
    public class PrintRequest
    {
        public int ID { get; set; }
        public int OwnerId { get; set; }
        public bool IsColored { get; set; }
        public ICollection<DocumentsFile> DocumentsFiles { get; set; }
        public Customer CustomerClass { get; set; }
    }
}
