import { Link } from "react-router-dom";

const Brands = () => {
  const brands = [
    {
      name: "Seiko",
      description: "Precision timepieces since 1881",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400",
      products: 45,
    },
    {
      name: "Citizen",
      description: "Eco-friendly watch technology",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
      products: 38,
    },
    {
      name: "Orient",
      description: "Classic mechanical watches",
      image: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=400",
      products: 32,
    },
    {
      name: "Casio",
      description: "Innovation in digital watches",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400",
      products: 56,
    },
    {
      name: "Sony",
      description: "Leading electronics technology",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      products: 78,
    },
    {
      name: "Panasonic",
      description: "Quality home electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
      products: 64,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Featured Brands</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore products from Japan's most prestigious brands. Each brand represents 
            decades of craftsmanship, innovation, and quality.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to={`/brands/${brand.name.toLowerCase()}`}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{brand.description}</p>
                    <div className="text-sm text-muted-foreground">
                      {brand.products} products available
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
