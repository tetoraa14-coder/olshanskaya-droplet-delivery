import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground mt-16">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Ольшанская" width={36} height={36} />
          <span className="text-lg font-bold">Ольшанская</span>
        </div>
        <p className="text-sm opacity-80">
          Доставка чистой питьевой воды по Донецку и области. Работаем для вашего здоровья!
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-4">Навигация</h3>
        <div className="space-y-2 text-sm opacity-80">
          <Link to="/" className="block hover:opacity-100">Главная</Link>
          <Link to="/catalog" className="block hover:opacity-100">Каталог</Link>
          <Link to="/about" className="block hover:opacity-100">О компании</Link>
          <Link to="/services" className="block hover:opacity-100">Услуги</Link>
          <Link to="/contacts" className="block hover:opacity-100">Контакты</Link>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">Контакты</h3>
        <div className="space-y-3 text-sm">
          <a href="tel:+79494332002" className="flex items-center gap-2 opacity-80 hover:opacity-100">
            <Phone className="w-4 h-4" /> +7 (949) 433-20-02
          </a>
          <button onClick={() => { navigator.clipboard.writeText("servicecooler@mail.ru"); toast.success("Email скопирован!"); }} className="flex items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer">
            <Mail className="w-4 h-4" /> servicecooler@mail.ru
          </button>
          <p className="flex items-center gap-2 opacity-80">
            <MapPin className="w-4 h-4" /> Донецк, улица Боклевского, 2
          </p>
        </div>
        <div className="flex gap-3 mt-4">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Ольшанская. Все права защищены.
    </div>
  </footer>
);

export default Footer;
