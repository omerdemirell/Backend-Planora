using Microsoft.EntityFrameworkCore;
using Planora.API.Entities;

namespace Planora.API.Data
{
    public class PlanoraDbContext : DbContext
    {
        public PlanoraDbContext(DbContextOptions<PlanoraDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}