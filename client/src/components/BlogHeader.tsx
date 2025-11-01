import { BookOpen } from "lucide-react";

export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" data-testid="icon-logo" />
          <span className="font-semibold text-lg" data-testid="text-site-name">Future of Work Series</span>
        </div>
        <nav className="flex items-center gap-6">
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-home"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-articles"
          >
            Articles
          </a>
          <a 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-about"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
