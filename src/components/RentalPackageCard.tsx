
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf } from "lucide-react";

interface RentalPackageCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  includedPlants: number;
  features: string[];
  image: string;
  popular?: boolean;
  onSelect: () => void;
}

const RentalPackageCard = ({
  title,
  description,
  price,
  duration,
  includedPlants,
  features,
  image,
  popular = false,
  onSelect
}: RentalPackageCardProps) => {
  return (
    <Card className={`overflow-hidden border-leaf-100 shadow-soft relative ${
      popular ? "ring-2 ring-leaf-400 shadow-soft-xl" : ""
    }`}>
      {popular && (
        <Badge className="absolute top-4 right-4 bg-leaf-500 hover:bg-leaf-600 text-white z-10">
          Most Popular
        </Badge>
      )}
      <CardContent className="p-0">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="mb-6">
            <div className="flex items-end gap-1">
              <span className="text-3xl font-bold text-leaf-700">₹{price}</span>
              <span className="text-muted-foreground">/{duration}</span>
            </div>
            <div className="flex items-center mt-2">
              <Leaf className="h-4 w-4 text-leaf-500 mr-2" />
              <span className="text-sm text-muted-foreground">{includedPlants} plants included</span>
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-4 w-4 text-leaf-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={onSelect}
            className={popular 
              ? "w-full bg-leaf-500 hover:bg-leaf-600 text-white" 
              : "w-full border-leaf-200 hover:bg-leaf-50 text-leaf-700"
            }
            variant={popular ? "default" : "outline"}
          >
            Select Package
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalPackageCard;
