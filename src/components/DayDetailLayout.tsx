import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface DayDetailLayoutProps {
  day: number;
  date: string;
  title: string;
  children: ReactNode;
}

const DayDetailLayout = ({ day, date, title, children }: DayDetailLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center gap-4 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-secondary"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-primary">Day {day}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container max-w-4xl mx-auto flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Button>
          {day < 5 && (
            <Button
              variant="default"
              onClick={() => navigate(`/day-${day + 1}`)}
              className="gradient-hero text-primary-foreground"
            >
              Next day
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default DayDetailLayout;
