
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, Phone, Heart } from "lucide-react";
import CartIcon from "@/components/CartIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/buy" },
    { name: "Fertilizers", path: "/fertilizers" },
    { name: "Pots & Accessories", path: "/pots" },
    { name: "Rent Plants", path: "/rent" },
    { name: "Book Plant Care", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        >
          <Leaf className="h-8 w-8 text-leaf-500" />
          <span className="font-serif text-2xl font-medium tracking-tight">
            Das Nursery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-base font-medium transition-colors duration-300 hover:text-leaf-600",
                location.pathname === link.path
                  ? "text-leaf-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-leaf-500"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="bg-leaf-500 hover:bg-leaf-600 text-white px-3 py-1 h-9 transition-all duration-300 hover:shadow-leaf"
            >
              <Link to="/services">
                <Heart className="mr-1 h-4 w-4" /> Plant Care
              </Link>
            </Button>
            <CartIcon />
          </div>
        </nav>

        {/* Mobile Menu Toggle & Cart Icon */}
        <div className="md:hidden flex items-center gap-2">
          <CartIcon />
          <button
            className="flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xl font-medium transition-colors duration-300 hover:text-leaf-600",
                  location.pathname === link.path
                    ? "text-leaf-600"
                    : "text-foreground/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-leaf-500 hover:bg-leaf-600 text-white mt-2 w-40 transition-all duration-300 hover:shadow-leaf"
            >
              <Link to="/services">
                <Heart className="mr-2 h-4 w-4" /> Plant Care Service
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
