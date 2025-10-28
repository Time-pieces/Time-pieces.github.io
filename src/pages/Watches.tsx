import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Watches = () => {
  const products = [
    {
      id: "1",
      name: "Automatic Chronograph Watch",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
      category: "Chronograph",
      isNew: true,
    },
    {
      id: "2",
      name: "Mechanical Dive Watch",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
      category: "Diver",
      isNew: true,
    },
    {
      id: "3",
      name: "Classic Leather Strap Watch",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=500",
      category: "Classic",
    },
    {
      id: "4",
      name: "Solar Powered Watch",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500",
      category: "Solar",
    },
    {
      id: "5",
      name: "Luxury Gold Watch",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1587836374228-4c29a3f9f092?w=500",
      category: "Luxury",
    },
    {
      id: "6",
      name: "Sport Chronometer",
      price: 529.99,
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
      category: "Sport",
    },
    {
      id: "7",
      name: "Minimalist Design Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500",
      category: "Minimalist",
    },
    {
      id: "8",
      name: "Skeleton Automatic Watch",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500",
      category: "Automatic",
    },
    {
      id: "9",
      name: "Titanium Diver Pro",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=500",
      category: "Diver",
      isNew: true,
    },
    {
      id: "10",
      name: "Vintage Dress Watch",
      price: 649.99,
      image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=500",
      category: "Classic",
    },
    {
      id: "11",
      name: "GMT World Timer",
      price: 849.99,
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500",
      category: "GMT",
    },
    {
      id: "12",
      name: "Blue Dial Automatic",
      price: 729.99,
      image: "https://images.unsplash.com/photo-1611744336369-6512059c0c06?w=500",
      category: "Automatic",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Japanese Watches</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our collection of premium Japanese watches. From classic designs to modern innovations, 
            each timepiece represents the pinnacle of Japanese craftsmanship.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Chronograph</Button>
              <Button variant="outline" size="sm">Diver</Button>
              <Button variant="outline" size="sm">Classic</Button>
              <Button variant="outline" size="sm">Sport</Button>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Watches;
