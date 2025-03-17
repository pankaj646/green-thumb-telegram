
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ 
  name, 
  image, 
  quote, 
  rating 
}: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden border-leaf-100 shadow-soft bg-white/60 backdrop-blur-sm hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium">{name}</h3>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground italic">"{quote}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
