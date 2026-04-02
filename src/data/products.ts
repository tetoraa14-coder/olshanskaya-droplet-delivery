import waterBottle from "@/assets/water-bottle.png";
import emptyBottle from "@/assets/empty-bottle.png";
import waterPump from "@/assets/water-pump.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  volume?: string;
  image: string;
  category: "water" | "bottles" | "accessories";
}

export const products: Product[] = [
  {
    id: "water-19l",
    name: "Вода питьевая «Ольшанская» 18,9л",
    description: "Чистая питьевая вода, идеально подходит для кулеров. Доставка с заменой бутылки.",
    price: "180 руб.",
    volume: "18,9 литров",
    image: waterBottle,
    category: "water",
  },
  {
    id: "empty-bottle",
    name: "Пустая бутылка 18,9л",
    description: "Новая поликарбонатная бутылка для воды объёмом 18,9 литров.",
    price: "700 руб.",
    volume: "18,9 литров",
    image: emptyBottle,
    category: "bottles",
  },
  {
    id: "water-pump",
    name: "Помпа для воды",
    description: "Ручная помпа для удобной подачи воды из бутылки 18,9 литров.",
    price: "600 руб.",
    image: waterPump,
    category: "accessories",
  },
];

export const categories = [
  { id: "all", label: "Все товары" },
  { id: "water", label: "Питьевая вода" },
  { id: "bottles", label: "Бутыли" },
  { id: "accessories", label: "Сопутствующие товары" },
];
