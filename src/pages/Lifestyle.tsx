import ProductCard from "@/components/ProductCard";

const Lifestyle = () => {
  const products = [
    {
      id: "l1",
      name: "Traditional Tea Set",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1563822249548-9a72b6d9c6f9?w=500",
      category: "Kitchen",
      isNew: true,
    },
    {
      id: "l2",
      name: "Ceramic Dinnerware Set",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500",
      category: "Dining",
    },
    {
      id: "l3",
      name: "Minimalist Backpack",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      category: "Accessories",
    },
    {
      id: "l4",
      name: "Japanese Knife Set",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500",
      category: "Kitchen",
    },
    {
      id: "l5",
      name: "Bamboo Home Decor",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
      category: "Home",
    },
    {
      id: "l6",
      name: "Leather Wallet",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
      category: "Accessories",
    },
    {
      id: "l7",
      name: "Zen Garden Set",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=500",
      category: "Home",
      isNew: true,
    },
    {
      id: "l8",
      name: "Cotton Kimono Robe",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500",
      category: "Clothing",
    },
    {
      id: "l9",
      name: "Incense Gift Set",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500",
      category: "Home",
    },
    {
      id: "l10",
      name: "Lacquerware Bowl Set",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1586041828039-2e573b7c87f9?w=500",
      category: "Dining",
    },
    {
      id: "l11",
      name: "Canvas Tote Bag",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
      category: "Accessories",
    },
    {
      id: "l12",
      name: "Wooden Chopstick Set",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1606329972909-fa44df7f4be9?w=500",
      category: "Dining",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Lifestyle</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Enhance your everyday life with authentic Japanese lifestyle products. 
            Discover items that blend functionality with beautiful design.
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

export default Lifestyle;
