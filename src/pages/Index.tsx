import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Droplets, Truck, CircleDollarSign, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { products } from "@/data/products";
import heroBottle from "@/assets/hero-bottles.jpeg";

const advantages = [
  { icon: Truck, title: "Быстрая доставка", desc: "Доставим воду в удобное для вас время по Донецку и области" },
  { icon: Droplets, title: "Чистая вода", desc: "Питьевая вода из проверенных источников, прошедшая контроль качества" },
  { icon: CircleDollarSign, title: "Доступные цены", desc: "Выгодные цены и гибкая система скидок для постоянных клиентов" },
];

const reviews = [
  { name: "Анна К.", text: "Заказываю уже полгода — вода отличная, доставка всегда вовремя!", rating: 5 },
  { name: "Сергей М.", text: "Лучшая вода в городе, рекомендую всем знакомым. Спасибо!", rating: 5 },
  { name: "Ольга П.", text: "Очень удобно, курьер вежливый, бутылки всегда чистые.", rating: 5 },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden hero-gradient text-primary-foreground">
      <div className="relative container py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Чистая вода —<br />здоровая жизнь
          </h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90">
            Доставка питьевой воды 18,9 л по Донецку и области. Быстро, надёжно, доступно.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+79494332002">
                <Phone className="w-5 h-5 mr-2" /> Позвонить
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contacts">Оставить заявку</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-[-20px]">
          <img src={heroBottle} alt="Вода Ольшанская 18,9л" className="h-56 md:h-72 lg:h-80 object-contain drop-shadow-xl" />
          <img src={heroBottle} alt="Вода Ольшанская 18,9л" className="h-56 md:h-72 lg:h-80 object-contain drop-shadow-xl -ml-8" />
          <img src={heroBottle} alt="Вода Ольшанская 18,9л" className="h-56 md:h-72 lg:h-80 object-contain drop-shadow-xl -ml-8" />
        </div>
      </div>
    </section>

    {/* Advantages */}
    <section className="container py-16">
      <h2 className="text-3xl font-extrabold text-center mb-10">Почему выбирают нас</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {advantages.map((a) => (
          <div key={a.title} className="text-center space-y-3 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary">
              <a.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg">{a.title}</h3>
            <p className="text-muted-foreground text-sm">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Popular Products */}
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="text-3xl font-extrabold text-center mb-10">Популярные товары</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link to="/catalog">Весь каталог →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA + Contact Form */}
    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Закажите воду прямо сейчас</h2>
        <p className="opacity-90 max-w-lg mx-auto">Оставьте заявку, и мы свяжемся с вами в кратчайшие сроки</p>
        <ContactForm />
      </div>
    </section>

    {/* Reviews */}
    <section className="container py-16">
      <h2 className="text-3xl font-extrabold text-center mb-10">Отзывы клиентов</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border rounded-lg p-6 shadow-[var(--card-shadow)]">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4">«{r.text}»</p>
            <p className="font-bold text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Index;
