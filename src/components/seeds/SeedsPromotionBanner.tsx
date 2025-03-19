
import { Button } from "@/components/ui/button";

const SeedsPromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-leaf-50 rounded-xl overflow-hidden my-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="p-8 md:p-12 flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Garden Today!</h3>
          <p className="text-muted-foreground mb-6">
            Take advantage of our seasonal seed promotion. Buy 3 seed packets, get 1 free!
            Ideal for beginners and seasoned gardeners alike.
          </p>
          <Button className="bg-leaf-500 hover:bg-leaf-600 text-white">
            Shop Now
          </Button>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1636804671318-5f85d6329226?q=80&w=1000&auto=format&fit=crop" 
            alt="Seed Packets" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SeedsPromotionBanner;
