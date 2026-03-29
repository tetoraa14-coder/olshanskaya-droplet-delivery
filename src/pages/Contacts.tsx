import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Contacts = () => (
  <main className="container py-12">
    <h1 className="text-3xl font-extrabold mb-8">Контакты</h1>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div>
            <h3 className="font-bold">Телефон</h3>
            <a href="tel:+79001234567" className="text-primary font-semibold text-lg">+7 (900) 123-45-67</a>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div>
            <h3 className="font-bold">Email</h3>
            <a href="mailto:info@olshanskaya.ru" className="text-primary">info@olshanskaya.ru</a>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div>
            <h3 className="font-bold">Адрес</h3>
            <p className="text-muted-foreground">г. Донецк</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
          <div>
            <h3 className="font-bold">Часы работы</h3>
            <p className="text-muted-foreground">Пн–Сб: 8:00–18:00</p>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button asChild>
            <a href="tel:+79001234567">
              <Phone className="w-4 h-4 mr-2" /> Позвонить
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> Telegram
            </a>
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Оставить заявку</h2>
        <ContactForm />
      </div>
    </div>
  </main>
);

export default Contacts;
