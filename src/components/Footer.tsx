
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-leaf-500" />
              <span className="font-serif text-xl font-medium tracking-tight">Das Nursery</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Bringing nature to your home, office & events in Siliguri since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
                  Buy Plants
                </Link>
              </li>
              <li>
                <Link to="/rent" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
                  Rent Plants
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
                  Plant Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-leaf-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Green Street, Siliguri, West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-leaf-500 shrink-0" />
                <span className="text-muted-foreground">+91 1234567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-leaf-500 shrink-0" />
                <span className="text-muted-foreground">contact@dasnursery.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new plants and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/50 border-muted"
              />
              <Button className="bg-leaf-500 hover:bg-leaf-600 text-white transition-all duration-300 hover:shadow-leaf">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Das Nursery. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-leaf-500 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
