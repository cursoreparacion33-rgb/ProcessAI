import { motion } from "framer-motion";
import { BadgeCheck, Award, Brain } from "lucide-react";
import ctoImage from "@assets/1764020401442_1764272827525.jpg";

export default function CTOProfile() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <img src={ctoImage} alt="CTO Process AI" className="w-full h-auto object-cover aspect-[3/4]" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl -z-10 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Brain className="w-3 h-3" /> Liderazgo Técnico
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
              Director de Tecnología
            </h2>
            <h3 className="text-xl text-primary font-medium mb-6">
              Process AI
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Especialista en Inteligencia Artificial y Machine Learning con diplomatura en el campo. 
              Combino una sólida trayectoria en educación tecnológica con experiencia práctica implementando 
              soluciones de automatización que transforman empresas y organizaciones educativas.
            </p>

            <div className="space-y-4">
              {[
                "Diplomatura en IA y Machine Learning",
                "Diseño de soluciones de IA a medida para empresas",
                "Experiencia formando equipos y capacitando directivos",
                "Implementación de prototipos rápidos de alto impacto"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 p-1 bg-accent/10 rounded-full">
                    <BadgeCheck className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
