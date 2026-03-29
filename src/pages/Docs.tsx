import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  { name: "Сертификат соответствия на питьевую воду", file: "#" },
  { name: "Санитарно-эпидемиологическое заключение", file: "#" },
  { name: "Лицензия на добычу подземных вод", file: "#" },
];

const Docs = () => (
  <main className="container py-12 max-w-3xl">
    <h1 className="text-3xl font-extrabold mb-2">Документация</h1>
    <p className="text-muted-foreground mb-8">Сертификаты и лицензии, подтверждающие качество нашей продукции</p>

    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.name}
          className="flex items-center justify-between p-4 bg-card border rounded-lg shadow-[var(--card-shadow)]"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary shrink-0" />
            <span className="font-semibold text-sm">{doc.name}</span>
          </div>
          <Button size="sm" variant="outline" asChild>
            <a href={doc.file} download>
              <Download className="w-4 h-4 mr-1" /> Скачать
            </a>
          </Button>
        </div>
      ))}
    </div>
  </main>
);

export default Docs;
