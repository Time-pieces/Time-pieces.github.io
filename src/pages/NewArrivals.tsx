import ProductCard from "@/components/ProductCard";

const NewArrivals = () => {
  const products = [
    {
      id: "n1",
      name: "Limited Edition Chronograph",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
      category: "Watches",
      isNew: true,
    },
    {
      id: "n2",
      name: "Premium Noise-Canceling Headphones",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "Electronics",
      isNew: true,
    },
    {
      id: "n3",
      name: "Designer Backpack",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      category: "Lifestyle",
      isNew: true,
    },
    {
      id: "n4",
      name: "Smart Fitness Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      category: "Electronics",
      isNew: true,
    },
    {
      id: "n5",
      name: "Titanium Dive Watch",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
      category: "Watches",
      isNew: true,
    },
    {
      id: "n6",
      name: "Artisan Tea Set",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1563822249548-9a72b6d9c6f9?w=500",
      category: "Lifestyle",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/10 via-background to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6">
            May 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">New Arrivals</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest additions to our collection. Fresh from Japan, these exclusive products 
            represent the newest in innovation and design.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;
