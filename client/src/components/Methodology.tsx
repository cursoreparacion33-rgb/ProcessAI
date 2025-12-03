import { motion } from "framer-motion";

const steps = [
  { title: "Diagnóstico Rápido", desc: "Relevamos tus procesos en una reunión corta.", num: "01" },
  { title: "Mapa de Automatización", desc: "Identificamos tareas repetitivas y cuellos de botella.", num: "02" },
  { title: "Prototipo IA", desc: "Creamos una primera versión para validar en semanas.", num: "03" },
  { title: "Implementación", desc: "Despliegue y capacitación a tu equipo.", num: "04" },
  { title: "Mejora Continua", desc: "Ajustamos en base a métricas y feedback real.", num: "05" },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Cómo Trabajamos
          </h2>
          <p className="text-gray-400">Metodología ágil centrada en resultados medibles.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:scale-110 group-hover:border-accent group-hover:text-accent transition-all duration-300 relative bg-background">
                  {step.num}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
