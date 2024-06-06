using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryCore.Models
{
    public class Customer
    {
        public int ID { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(20)]
        public string Phone { get; set; }
        [MaxLength(50)]
        public string Password { get; set; }
        public ICollection<PrintRequest> PrintRequests { get; set; }
    }
}
