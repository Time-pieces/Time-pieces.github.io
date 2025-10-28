import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ShoppingCart, Star, Truck, Shield, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams();

  const product = {
    name: "Automatic Chronograph Watch",
    price: 599.99,
    rating: 4.8,
    reviews: 127,
    description: "This stunning automatic chronograph watch combines traditional Japanese watchmaking with modern design. Featuring a precision automatic movement, sapphire crystal, and water resistance up to 100m.",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
      "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=800",
    ],
    features: [
      "Automatic movement with 42-hour power reserve",
      "Sapphire crystal with anti-reflective coating",
      "Water resistant to 100 meters",
      "Date display at 3 o'clock position",
      "Stainless steel case and bracelet",
      "Luminous hands and markers",
    ],
    specifications: {
      "Case Size": "42mm",
      "Case Material": "Stainless Steel",
      "Movement": "Automatic",
      "Water Resistance": "100m",
      "Crystal": "Sapphire",
      "Band Material": "Stainless Steel",
    },
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/watches" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Watches
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:opacity-75 transition-opacity">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-4xl font-bold mb-6">${product.price}</div>

            <p className="text-muted-foreground mb-8">{product.description}</p>

            <div className="space-y-4 mb-8">
              <Select defaultValue="one">
                <SelectTrigger>
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one">1</SelectItem>
                  <SelectItem value="two">2</SelectItem>
                  <SelectItem value="three">3</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="border-t border-b border-border py-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-sm">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">2-year manufacturer warranty</span>
              </div>
            </div>

            <Tabs defaultValue="features" className="mt-8">
              <TabsList>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="specifications">
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
