import { Droplets, Shield, Users, MapPin } from "lucide-react";

const About = () => (
  <main className="container py-12 max-w-3xl">
    <h1 className="text-3xl font-extrabold mb-6">О компании</h1>

    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
      Компания «Ольшанская» — надёжный поставщик чистая питьевая вода в Донецке и области.
      Мы работаем, чтобы каждый день у вас на столе была свежая, вкусная и безопасная питьевая вода.
    </p>

    <h2 className="text-2xl font-bold mb-4">Наши преимущества</h2>
    <div className="grid sm:grid-cols-2 gap-6 mb-10">
      {[
        { icon: Droplets, title: "Качество воды", desc: "Чистая питьевая вода, прошедшая многоступенчатую очистку и лабораторный контроль." },
        { icon: Shield, title: "Надёжность", desc: "Стабильные поставки без задержек. Мы ценим ваше время и доверие." },
        { icon: Users, title: "Клиентский сервис", desc: "Дружелюбные курьеры, удобный заказ по телефону и через заявку на сайте." },
        { icon: MapPin, title: "География", desc: "Доставляем по всему Донецку и области — быстро и в удобное для вас время." },
      ].map((item) => (
        <div key={item.title} className="flex gap-4">
          <div className="shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-bold mb-4">Немного истории</h2>
    <p className="text-muted-foreground leading-relaxed">
      «Ольшанская» начала свою деятельность с небольшого производства и за годы работы выросла в
      компанию, которой доверяют сотни семей и организаций. Мы постоянно совершенствуем технологии
      очистки и расширяем географию доставки, чтобы чистая вода была доступна каждому.
    </p>
  </main>
);

export default About;
