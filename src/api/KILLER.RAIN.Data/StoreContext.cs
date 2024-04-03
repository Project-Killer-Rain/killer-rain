using Microsoft.EntityFrameworkCore;
using Onyx.Drum.Domain.Catalog;

namespace Onyx.Drum.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {

    }

    public DbSet<Item> Items { get; set;}
}