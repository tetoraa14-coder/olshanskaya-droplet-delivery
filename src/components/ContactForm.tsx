import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Заполните имя и телефон");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Заявка отправлена! Мы скоро свяжемся с вами.");
      setForm({ name: "", phone: "", comment: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input
        placeholder="Ваше имя"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        maxLength={100}
        required
      />
      <Input
        placeholder="Телефон"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        maxLength={20}
        required
      />
      <Textarea
        placeholder="Комментарий (необязательно)"
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
        maxLength={500}
        rows={3}
      />
      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? "Отправка..." : "Оставить заявку"}
      </Button>
    </form>
  );
};

export default ContactForm;
