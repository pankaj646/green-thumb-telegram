
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const SeedsFAQ = () => {
  return (
    <div className="mt-16 bg-white/80 backdrop-blur-sm border border-leaf-50 rounded-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-6 w-6 text-leaf-500" />
        <h2 className="text-2xl font-medium">Frequently Asked Questions</h2>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            How to Grow Vegetable Seeds at Home?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              To grow vegetable seeds at home, start by preparing a well-draining potting mix. 
              Sow the seeds at the recommended depth (usually 2-3 times the diameter of the seed). 
              Keep the soil consistently moist but not waterlogged. Place in a warm location with 
              good indirect light until germination occurs. Once seedlings develop their first true 
              leaves, transplant to larger containers or directly to your garden. Most vegetable seeds 
              germinate within 7-14 days under optimal conditions.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Which Seeds Are Best for Small Gardens?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              For small gardens or balcony spaces, choose compact or dwarf varieties that yield 
              well in limited space. Great options include herbs (basil, mint, coriander), leafy 
              greens (spinach, lettuce), cherry tomatoes, chili peppers, and microgreens. Vertical 
              growing plants like cucumbers and beans are also excellent choices as they can be trained 
              to grow upward rather than spreading outward. Container-friendly varieties specifically 
              bred for small spaces will give you the best results.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            When is the Best Time to Plant Seeds in Siliguri?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              In Siliguri's climate, winter vegetables (cabbage, cauliflower, carrots) should be 
              planted from October to December. Summer vegetables (tomatoes, okra, cucumber) are 
              best planted from February to April. Monsoon-friendly seeds can be planted from June 
              to August. For flowers, winter annuals should be planted in October-November, while 
              summer annuals in February-March. Always check the specific planting instructions for 
              each seed variety as individual requirements may vary.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            How Should I Store Unused Seeds?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground">
              To maximize seed viability, store unused seeds in a cool, dry, and dark place. Keep them 
              in their original packets or in airtight containers like glass jars with tight lids. 
              Adding a small silica gel packet helps absorb excess moisture. Properly stored, most 
              vegetable and flower seeds remain viable for 2-3 years, though germination rates may 
              gradually decrease. Seeds of onions, leeks, and parsnips have shorter viability (about 
              1 year), while tomato and cucumber seeds can last 4-5 years when stored correctly.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SeedsFAQ;
