import { Award, Globe, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Japan Store</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted gateway to authentic Japanese products, bringing quality, 
            craftsmanship, and culture to customers worldwide since 2010.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, Japan Store began with a simple mission: to share the beauty 
                  and quality of Japanese craftsmanship with the world. What started as a small 
                  shop in Tokyo has grown into a trusted international retailer.
                </p>
                <p>
                  We work directly with renowned Japanese manufacturers and artisans to bring you 
                  authentic products that exemplify the precision, innovation, and attention to 
                  detail that Japan is famous for.
                </p>
                <p>
                  Today, we serve customers in over 100 countries, but our commitment remains 
                  unchanged: to deliver exceptional Japanese products with outstanding service.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400"
                alt="Tokyo"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400"
                alt="Store"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Every product is carefully selected and verified for authenticity
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Care</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our priority with dedicated support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-sm text-muted-foreground">
                Serving customers worldwide with reliable shipping
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building connections between Japan and the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
