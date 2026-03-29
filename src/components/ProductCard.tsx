import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  volume?: string;
  image: string;
}

const ProductCard = ({ name, description, price, volume, image }: ProductCardProps) => (
  <div className="bg-card rounded-lg border shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow p-6 flex flex-col">
    <div className="flex justify-center mb-4">
      <img src={image} alt={name} className="h-48 w-auto object-contain" loading="lazy" />
    </div>
    <h3 className="font-bold text-lg mb-1">{name}</h3>
    {volume && <span className="text-sm text-muted-foreground mb-2">{volume}</span>}
    <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
    <div className="flex items-center justify-between mt-auto">
      <span className="text-xl font-extrabold text-primary">{price}</span>
      <Button size="sm" asChild>
        <a href="tel:+79001234567">
          <Phone className="w-4 h-4 mr-1" /> Заказать
        </a>
      </Button>
    </div>
  </div>
);

export default ProductCard;
