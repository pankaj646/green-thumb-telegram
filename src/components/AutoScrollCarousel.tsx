
import { useEffect, useRef, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselApi
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface Item {
  name: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  bestSeller?: boolean;
}

interface AutoScrollCarouselProps {
  title: string;
  subtitle: string;
  description: string;
  viewAllLink: string;
  viewAllText: string;
  items: Item[];
  renderItem: (item: Item, index: number) => React.ReactNode;
  interval?: number; // in milliseconds
  bgClass?: string;
}

const AutoScrollCarousel = ({
  title,
  subtitle,
  description,
  viewAllLink,
  viewAllText,
  items,
  renderItem,
  interval = 3000,
  bgClass = ""
}: AutoScrollCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;
    
    // Auto-scroll function
    const startAutoScroll = () => {
      intervalRef.current = window.setInterval(() => {
        api.scrollNext();
      }, interval);
    };

    startAutoScroll();

    // Pause auto-scroll on hover
    const carouselElement = document.querySelector(`[data-carousel="${title}"]`);
    if (carouselElement) {
      const pauseAutoScroll = () => {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };

      const resumeAutoScroll = () => {
        if (!intervalRef.current) {
          startAutoScroll();
        }
      };

      carouselElement.addEventListener("mouseenter", pauseAutoScroll);
      carouselElement.addEventListener("mouseleave", resumeAutoScroll);

      return () => {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
        carouselElement.removeEventListener("mouseenter", pauseAutoScroll);
        carouselElement.removeEventListener("mouseleave", resumeAutoScroll);
      };
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [api, interval, title]);

  return (
    <div className={`py-20 px-6 md:px-12 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
              {subtitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-2">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {description}
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-leaf-200 hover:bg-leaf-50 text-leaf-700">
            <Link to={viewAllLink}>{viewAllText}</Link>
          </Button>
        </div>

        <div className="relative w-full">
          <Carousel
            setApi={setApi}
            data-carousel={title}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {items.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-full"
                  >
                    {renderItem(item, index)}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
