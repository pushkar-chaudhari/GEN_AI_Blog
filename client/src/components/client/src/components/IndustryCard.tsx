import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export default function IndustryCard({ icon: Icon, title, points }: IndustryCardProps) {
  return (
    <Card className="h-full" data-testid={`card-industry-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="gap-2">
        <Icon className="w-8 h-8 text-primary" data-testid={`icon-${title.toLowerCase()}`} />
        <h3 className="text-xl font-semibold" data-testid={`text-industry-title-${title.toLowerCase()}`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li 
              key={index} 
              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
              data-testid={`text-point-${index}`}
            >
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
