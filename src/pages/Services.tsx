import { Truck, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => (
  <main className="container py-12 max-w-3xl">
    <h1 className="text-3xl font-extrabold mb-6">Услуги</h1>

    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-3 mb-3">
          <Truck className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Доставка воды</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Мы доставляем питьевую артезианскую воду в бутылях 19 литров прямо к вашей двери.
          Доставка осуществляется по Донецку и области. Курьер заберёт пустую тару и установит
          полную бутылку на кулер при необходимости.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-3">
          <Clock className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Условия и сроки</h2>
        </div>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Доставка в день заказа или на следующий рабочий день</li>
          <li>Минимальный заказ — 1 бутыль</li>
          <li>Бесплатная замена пустой тары при заказе воды</li>
          <li>Работаем с понедельника по субботу, с 8:00 до 18:00</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Способы заказа</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="tel:+79001234567">
              <Phone className="w-5 h-5 mr-2" /> Позвонить
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:info@olshanskaya.ru">
              <Mail className="w-5 h-5 mr-2" /> Написать на email
            </a>
          </Button>
        </div>
      </section>
    </div>
  </main>
);

export default Services;
