using Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    class CustomerServiceContext : DbContext
    {
        public virtual DbSet<FAQ> FAQ { get; set; }
        public virtual DbSet<Inquiry> Inquiries { get; set; }



        public CustomerServiceContext() : base("name=CustomerService")
        {
            Database.CreateIfNotExists();
            Database.SetInitializer(new CustomerServiceInit());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
