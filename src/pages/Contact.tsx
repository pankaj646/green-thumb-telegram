
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { sendContactToTelegram } from "@/utils/telegramNotifications";
import SEOHead from "@/components/seo/SEOHead";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send contact form data to Telegram
      await sendContactToTelegram(formData);
      
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <SEOHead 
        title="Contact Das Nursery | Get In Touch With Plant Experts"
        description="Contact Das Nursery for all your plant and gardening needs. We provide plants, seeds, and gardening supplies in Siliguri and bulk orders for Darjeeling, Sikkim, Nepal, Bhutan, and Assam."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-leaf-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="px-3 py-1 border-leaf-200 bg-leaf-50 text-leaf-700 rounded-full">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-4">Contact Das Nursery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our plants, services, or need assistance? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <AnimatedSection className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-leaf-100">
                <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-leaf-50 rounded-full p-3 text-leaf-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 7319322612</p>
                      <p className="text-muted-foreground">+91 7583941787</p>
                      <p className="text-muted-foreground">Tech Support: +91 7029575619</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-leaf-50 rounded-full p-3 text-leaf-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">dasnursery001@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-leaf-50 rounded-full p-3 text-leaf-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">Mamu More,</p>
                      <p className="text-muted-foreground">Siliguri, West Bengal, 734001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-leaf-50 rounded-full p-3 text-leaf-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Delivery Information</h3>
                      <p className="text-muted-foreground">Free delivery within Siliguri</p>
                      <p className="text-muted-foreground">Bulk orders only for: Darjeeling, Kurseong, Kalimpong, Mirik, Sikkim, Nepal, Bhutan, and Assam</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-leaf-100">
                <h2 className="text-2xl font-serif font-medium mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-soft border border-leaf-100">
                <h2 className="text-2xl font-serif font-medium mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf"
                  >
                    <Send className="h-4 w-4 mr-2" /> 
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-12 px-6 md:px-12 bg-leaf-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4">Visit Our Nursery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Come and explore our wide collection of plants at our nursery in Mamu More, Siliguri. We offer free delivery within Siliguri and bulk orders for neighboring regions.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-soft border border-leaf-100">
            <div className="h-[400px] w-full">
              {/* In a real app, you would include a Google Map here */}
              <div className="w-full h-full flex items-center justify-center bg-leaf-100/50">
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
