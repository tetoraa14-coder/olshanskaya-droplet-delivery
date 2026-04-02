import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Каталог", path: "/catalog" },
  { label: "О компании", path: "/about" },
  { label: "Услуги", path: "/services" },
  { label: "Документы", path: "/docs" },
  { label: "Контакты", path: "/contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ольшанская" width={60} height={60} />
          <span className="text-xl font-bold text-gradient">Ольшанская</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+79494332002" className="flex items-center gap-2 font-bold text-primary">
            <Phone className="w-4 h-4" />
            +7 (949) 433-20-02
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-background p-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 font-semibold ${
                location.pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+79494332002" className="block py-2 font-bold text-primary">
            <Phone className="w-4 h-4 inline mr-2" />
            +7 (949) 433-20-02
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
