import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, category, isNew }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {isNew && (
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full">
              NEW
            </div>
          )}
          <button className="absolute top-2 right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-accent-foreground">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>
      
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold mb-2 hover:text-accent transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          <Button size="sm" className="bg-accent hover:bg-accent/90" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
