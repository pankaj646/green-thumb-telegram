
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-10">
      <Button 
        className="h-14 w-14 rounded-full bg-leaf-500 hover:bg-leaf-600 text-white shadow-md"
        onClick={() => window.open('https://t.me/dasnursery', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingContactButton;
