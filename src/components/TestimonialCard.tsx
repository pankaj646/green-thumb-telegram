
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  rating: number;
  location?: string;
  date?: string;
}

const TestimonialCard = ({ 
  name, 
  image, 
  quote, 
  rating,
  location = "Siliguri",
  date = "2 weeks ago"
}: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-leaf-100 shadow-soft bg-white/60 backdrop-blur-sm transition-all duration-300 h-full">
        <CardContent className="p-6 relative">
          <Quote className="absolute top-6 right-6 h-8 w-8 text-leaf-100 opacity-50" />
          
          <div className="flex items-center mb-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-leaf-200 cursor-pointer">
                  <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-center">{name}</h4>
                  <p className="text-sm text-muted-foreground text-center">{location}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                      />
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <div>
              <h3 className="font-serif text-lg font-medium">{name}</h3>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">• {date}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <p className="text-muted-foreground italic">"{quote}"</p>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-leaf-200"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
