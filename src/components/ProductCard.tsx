
interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  volume?: string;
  image: string;
}

const ProductCard = ({ name, description, price, oldPrice, volume, image }: ProductCardProps) => (
  <div className="bg-card rounded-lg border shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow p-6 flex flex-col">
    <div className="flex justify-center mb-4">
      <img src={image} alt={name} className="h-48 w-auto object-contain" loading="lazy" />
    </div>
    <h3 className="font-bold text-lg mb-1">{name}</h3>
    {volume && <span className="text-sm text-muted-foreground mb-2">{volume}</span>}
    <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
    <div className="mt-auto">
      <div className="flex flex-col">
        {oldPrice && (
          <span className="text-sm text-muted-foreground line-through">{oldPrice}</span>
        )}
        <span className="text-xl font-extrabold text-primary">{price}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
