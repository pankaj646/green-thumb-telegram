
import { Plant } from "lucide-react";

const SeedsHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center p-2 bg-leaf-50 rounded-full mb-4">
        <Plant className="h-6 w-6 text-leaf-500" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Quality Seeds</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Start your garden journey with our premium selection of seeds. From vibrant flowers 
        to nutritious vegetables and aromatic herbs, we have everything you need for a thriving garden.
      </p>
    </div>
  );
};

export default SeedsHeader;
