using LibraryCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryCore
{
    public class library: DbContext
    {
        protected override void OnModelCreating(ModelBuilder mb)
        {
            base.OnModelCreating(mb);

            mb.Entity<Customer>()
                .HasMany(x => x.PrintRequests)
                .WithOne(x => x.CustomerClass)
                .HasForeignKey(x => x.OwnerId);

            mb.Entity<PrintRequest>()
                .HasMany(x => x.DocumentsFiles)
                .WithOne(x => x.PrintRequest)
                .HasForeignKey(x => x.RequestID);
           
        }
        protected override void OnConfiguring(DbContextOptionsBuilder ob)
        {
            base.OnConfiguring(ob);

            ob.UseSqlServer($"Server=192.168.1.150;User ID=sa;Password=Magnos0182163958;Database=library;TrustServerCertificate=True");
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<PrintRequest> PrintRequests { get; set; }
        public DbSet<DocumentsFile> Files { get; set; }
    }
}
