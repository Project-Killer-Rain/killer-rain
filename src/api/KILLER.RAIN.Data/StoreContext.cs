using Microsoft.EntityFrameworkCore;
using Killer.Rain.Domain.Catalog;

namespace Killer.Rain.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {

    }

    public DbSet<Item> Items { get; set;}
}