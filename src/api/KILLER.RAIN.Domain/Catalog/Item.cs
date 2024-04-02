namespace Onyx.Drum.Domain.Catalog;

public class Item
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Brand { get; set; }
    public decimal Price { get; set; }

    public List<Rating> Ratings { get; set; } = new List<Rating>();



     public Item (string name, string description, string brand, decimal price)
    {
        if(price <= 0)
        {throw new ArgumentException("Price must be above zero");}
        
        if(string.IsNullOrWhiteSpace(name))
        {throw new ArgumentException("Name is required");}

        if(string.IsNullOrWhiteSpace(description))
        {throw new ArgumentException("Description is required");}
       
       if(string.IsNullOrWhiteSpace(brand))
        {throw new ArgumentException("Brand is required");}
       
        Name = name;
        Description = description;
        Brand = brand;
        Price = price; 
    
    
    }

    public void AddRating (Rating rating)
    {
        Ratings.Add(rating);
    }


}
