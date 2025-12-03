import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/logo_procesia_ai_optimizado_1764272782903.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20 py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Process AI Logo" 
              className="h-10 w-10 rounded-full transition-transform duration-500 group-hover:rotate-180" 
            />
            <span className="text-xl font-bold font-heading text-white tracking-wide">
              PROCESS <span className="text-primary">AI</span>
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Servicios", "Metodología", "Casos de Éxito", "Nosotros"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105 cursor-pointer"
            onClick={() => window.open("https://wa.me/541171440089?text=Hola%2C%20me%20interesa%20agendar%20una%20entrevista", "_blank")}
          >
            Agendar Llamada
          </Button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {["Servicios", "Metodología", "Casos de Éxito", "Nosotros"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-lg font-medium text-gray-200 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button 
              className="w-full bg-primary text-primary-foreground rounded-full mt-4 cursor-pointer"
              onClick={() => window.open("https://wa.me/541171440089?text=Hola%2C%20me%20interesa%20agendar%20una%20entrevista", "_blank")}
            >
              Agendar Llamada
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
