using Microsoft.EntityFrameworkCore;
using ZapSearchApp.API.Models;

namespace ZapSearchApp.API.Data
{
    public class DataContext : DbContext
    {
        // DbContext db = new  
        //public DataContext(DbContextOptions<DbContext> optio ) : base(optio)    {   }
        public DataContext(DbContextOptions optio ) : base(optio)    {   }
        public DbSet<Value> Values { get; set; }
    }
}