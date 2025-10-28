import ProductCard from "@/components/ProductCard";

const Electronics = () => {
  const products = [
    {
      id: "e1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      category: "Audio",
      isNew: true,
    },
    {
      id: "e2",
      name: "Mirrorless Camera",
      price: 1499.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
      category: "Photography",
      isNew: true,
    },
    {
      id: "e3",
      name: "Bluetooth Speaker",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      category: "Audio",
    },
    {
      id: "e4",
      name: "Smart Watch",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      category: "Wearables",
    },
    {
      id: "e5",
      name: "Gaming Console",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500",
      category: "Gaming",
    },
    {
      id: "e6",
      name: "Noise Canceling Earbuds",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
      category: "Audio",
    },
    {
      id: "e7",
      name: "4K Action Camera",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
      category: "Photography",
      isNew: true,
    },
    {
      id: "e8",
      name: "Portable Projector",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500",
      category: "Display",
    },
    {
      id: "e9",
      name: "Wireless Charging Pad",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1591290619762-ece66c8c22c7?w=500",
      category: "Accessories",
    },
    {
      id: "e10",
      name: "Smart Home Hub",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
      category: "Smart Home",
    },
    {
      id: "e11",
      name: "Professional Drone",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
      category: "Photography",
    },
    {
      id: "e12",
      name: "Studio Microphone",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500",
      category: "Audio",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Electronics</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Cutting-edge Japanese electronics and technology. From audio equipment to cameras, 
            experience innovation at its finest.
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

export default Electronics;
