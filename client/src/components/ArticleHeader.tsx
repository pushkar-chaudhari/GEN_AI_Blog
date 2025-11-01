import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

interface ArticleHeaderProps {
  category: string;
  title: string;
  subtitle: string;
  authors: string[];
  date: string;
  readTime: string;
}

export default function ArticleHeader({ 
  category, 
  title, 
  subtitle, 
  authors, 
  date, 
  readTime 
}: ArticleHeaderProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Badge variant="secondary" className="mb-6" data-testid="badge-category">
        {category}
      </Badge>
      
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" data-testid="text-article-title">
        {title}
      </h1>
      
      <p className="text-xl text-muted-foreground leading-relaxed mb-8" data-testid="text-article-subtitle">
        {subtitle}
      </p>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b py-4">
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground" data-testid="text-authors">
            By {authors.join(", ")}
          </span>
        </div>
        
        <div className="flex items-center gap-1" data-testid="text-date">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-1" data-testid="text-read-time">
          <Clock className="w-4 h-4" />
          <span>{readTime} read</span>
        </div>
      </div>
    </div>
  );
}
