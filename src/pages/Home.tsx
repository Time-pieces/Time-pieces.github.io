import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Automatic Chronograph Watch",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
      category: "Watches",
      isNew: true,
    },
    {
      id: "2",
      name: "Mechanical Dive Watch",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
      category: "Watches",
      isNew: true,
    },
    {
      id: "3",
      name: "Classic Leather Strap Watch",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=500",
      category: "Watches",
    },
    {
      id: "4",
      name: "Solar Powered Watch",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500",
      category: "Watches",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary/20 to-background py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                May 2025 Collection
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Latest Japanese
                <span className="block text-accent">Timepieces</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Discover premium watches combining traditional craftsmanship with cutting-edge technology. Authentic Japanese quality delivered worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/new-arrivals">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 group">
                    Shop New Arrivals
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/brands">
                  <Button size="lg" variant="outline">
                    Explore Brands
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400"
                  alt="Watch 1"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400"
                  alt="Watch 2"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=400"
                  alt="Watch 3"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400"
                  alt="Watch 4"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Authentic Products</h3>
              <p className="text-sm text-muted-foreground">
                100% genuine Japanese products with authenticity guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Worldwide Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Fast and secure delivery to over 100 countries
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Warranty Protection</h3>
              <p className="text-sm text-muted-foreground">
                Official manufacturer warranty on all products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Collection</h2>
              <p className="text-muted-foreground">Handpicked premium timepieces</p>
            </div>
            <Link to="/watches">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/watches" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-background">
                <img
                  src="https://images.unsplash.com/photo-1524805444758-089113d48396?w=600"
                  alt="Watches"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Watches</h3>
                    <p className="text-sm opacity-90">Premium Japanese timepieces</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/electronics" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-background">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600"
                  alt="Electronics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Electronics</h3>
                    <p className="text-sm opacity-90">Cutting-edge technology</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/lifestyle" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-background">
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=600"
                  alt="Lifestyle"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Lifestyle</h3>
                    <p className="text-sm opacity-90">Japanese culture & design</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
