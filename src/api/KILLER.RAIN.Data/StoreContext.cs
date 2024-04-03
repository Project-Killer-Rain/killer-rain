using Microsoft.EntityFrameworkCore;
using KILLER.RAIN.Domain.Catalog;

namespace KILLER.RAIN.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {

    }

    public DbSet<Item> Items { get; set;}

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        DbInitializer.Initialize(builder);
    }

}