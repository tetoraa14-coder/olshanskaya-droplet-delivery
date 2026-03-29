import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

const Catalog = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-extrabold mb-2">Каталог товаров</h1>
      <p className="text-muted-foreground mb-8">Выберите категорию и закажите воду с доставкой</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <Button
            key={c.id}
            variant={active === c.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </Button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
};

export default Catalog;
