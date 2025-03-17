
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

// Components
import AnimatedSection from "@/components/AnimatedSection";

const Pots = () => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-28 pb-20 px-6 md:px-12">
      <AnimatedSection className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
          Pots & Accessories
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          Give your plants a stylish new home with our premium ceramic, terracotta, hanging, and decorative pots.
        </p>
        
        <div className="bg-muted/30 p-12 rounded-lg">
          <p className="text-muted-foreground mb-4">
            This page is coming soon. Please check back later!
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-leaf-500 hover:bg-leaf-600 text-white"
          >
            Return to Home
          </Button>
        </div>
      </AnimatedSection>
      
      <div className="fixed bottom-6 right-6 z-10">
        <Button 
          className="h-14 w-14 rounded-full bg-leaf-500 hover:bg-leaf-600 text-white shadow-md"
          onClick={() => window.open('https://t.me/dasnursery', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Pots;
