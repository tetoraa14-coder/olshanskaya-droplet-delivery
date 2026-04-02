import { Truck, Clock, Mail, CalendarDays, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
          Мы доставляем питьевую воду в бутылях 18,9 литров прямо к вашей двери.
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
          <li>Работаем с понедельника по субботу, с 8:00 до 18:00</li>
        </ul>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-3">
          <CalendarDays className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">График доставки по районам</h2>
        </div>
        <div className="text-muted-foreground space-y-3">
          <div>
            <p className="font-semibold text-foreground">Понедельник</p>
            <p>Доставка воды Харцызск</p>
            <p>Доставка воды Амвросиевка</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Вторник</p>
            <p>Доставка воды Моспино</p>
            <p>Доставка воды Старобешево</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Среда</p>
            <p>Доставка воды Донецк</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Четверг</p>
            <p>Доставка воды Новый Свет</p>
            <p>Доставка воды Макеевка</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Пятница</p>
            <p>Доставка воды Моспино</p>
            <p>Доставка воды Марьяновка</p>
          </div>
          <p className="font-semibold text-foreground mt-4">При больших заказах доставка день в день</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Способы заказа</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" variant="outline" asChild>
            <a href="tel:+79494332002">
              <Phone className="w-5 h-5 mr-2" /> Позвонить
            </a>
          </Button>
          <Button size="lg" variant="outline" onClick={() => { navigator.clipboard.writeText("servicecooler@mail.ru"); toast.success("Email скопирован!"); }}>
            <Mail className="w-5 h-5 mr-2" /> Написать на email
          </Button>
        </div>
      </section>
    </div>
  </main>
);

export default Services;
