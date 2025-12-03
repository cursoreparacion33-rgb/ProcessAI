import { motion } from "framer-motion";
import { 
  Bot, 
  BrainCircuit, 
  BarChart3, 
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Automatización de Procesos",
    description: "Mapeamos tus flujos de trabajo actuales para eliminar tareas repetitivas y cuellos de botella mediante bots inteligentes.",
    benefits: ["Reducción de errores manuales", "Ahorro de +20 horas semanales", "Integración entre herramientas"]
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    title: "IA y Machine Learning",
    description: "Modelos personalizados para predicción de demanda, segmentación de clientes, detección de riesgo y análisis de sentimiento.",
    benefits: ["Predicciones precisas", "Personalización a escala", "Modelos entrenados con tu data"]
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
    title: "Dashboards de Decisión",
    description: "Paneles de control ejecutivos que centralizan tus datos en tiempo real para que tomes decisiones informadas al instante.",
    benefits: ["Visualización clara", "Alertas automáticas", "Acceso móvil"]
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Servicios Principales
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para escalar tu operación y liberar el potencial humano de tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className="mb-4 p-3 bg-background/50 w-fit rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/5">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a href="#" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group-hover:translate-x-2 duration-300">
                    Ver casos de uso <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
