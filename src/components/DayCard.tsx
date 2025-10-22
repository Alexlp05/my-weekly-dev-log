import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface DayCardProps {
  day: number;
  title: string;
  description: string;
  achievements: string[];
  date: string;
}

const DayCard = ({ day, title, description, achievements, date }: DayCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/day-${day}`);
  };

  return (
    <Card 
      className="gradient-card shadow-card hover:shadow-elegant transition-smooth border-border cursor-pointer group"
      onClick={handleClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-sm font-semibold">
            Jour {day}
          </Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Réalisations :</h4>
          <ul className="space-y-1.5 mb-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-smooth pt-2 border-t border-border">
            <span>Lire la suite</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DayCard;
