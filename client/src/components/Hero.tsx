import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import logo from "/logo_procesia_ai_optimizado_1764272782903.png";
import heroBg from "@assets/generated_images/dark_abstract_tech_background.png";
import ContactDialog from "@/components/ContactDialog";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container relative z-10 px-6 pt-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block md:hidden"
          >
            <img src={logo} alt="Logo" className="w-24 h-24 rounded-full mx-auto animate-pulse shadow-[0_0_30px_rgba(37,99,235,0.5)]" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Automatizamos tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">procesos con IA</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Process AI es tu socio en inteligencia artificial, dashboards y automatización de tareas repetitivas, desde pymes hasta instituciones educativas.
            Gana tiempo y claridad hoy mismo.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-lg font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all cursor-pointer"
              onClick={() => window.open("https://wa.me/541171440089?text=Hola%2C%20me%20interesa%20agendar%20una%20entrevista", "_blank")}
            >
              Agendar una llamada <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <ContactDialog trigger={
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 rounded-full px-8 h-14 text-lg font-medium backdrop-blur-sm cursor-pointer">
                <Clock className="mr-2 w-5 h-5" />
                Diagnóstico gratis (5 min)
              </Button>
            } />
          </motion.div>
        </div>

        {/* Right Content - Logo/Visual */}
        <div className="flex-1 hidden md:flex justify-center items-center relative">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src={logo} 
              alt="Process AI Emblem" 
              className="w-[400px] h-[400px] object-contain rounded-full drop-shadow-2xl animate-[spin_60s_linear_infinite]" 
            />
            
            {/* Floating Elements Decoration */}
            <motion.div 
              className="absolute -top-10 -right-10 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-primary/30 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-mono text-primary">System Active</span>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-10 -left-10 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-primary/30 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-2/3 animate-[shimmer_2s_infinite]" />
                </div>
                <span className="text-xs font-mono text-gray-400">Processing...</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Tagline Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-white/5 py-4">
        <div className="container mx-auto flex justify-center gap-8 text-sm md:text-base text-gray-400 font-medium overflow-hidden whitespace-nowrap">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Especialistas en IA aplicada</span>
          <span className="hidden md:flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Automatización de procesos</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Machine Learning para negocios</span>
        </div>
      </div>
    </section>
  );
}
