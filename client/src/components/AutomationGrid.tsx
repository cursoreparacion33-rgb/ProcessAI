import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  FileSpreadsheet, 
  Receipt, 
  UserPlus, 
  GraduationCap 
} from "lucide-react";

const items = [
  { icon: <Users />, title: "Gestión de Leads y Ventas", desc: "Cualificación y seguimiento automático." },
  { icon: <MessageSquare />, title: "Atención al Cliente", desc: "Respuestas 24/7 con chatbots inteligentes." },
  { icon: <FileSpreadsheet />, title: "Reportes Automáticos", desc: "Generación y envío de informes sin clicks." },
  { icon: <Receipt />, title: "Administración", desc: "Facturación y conciliación bancaria autónoma." },
  { icon: <UserPlus />, title: "Onboarding HR", desc: "Alta de empleados y capacitación guiada." },
  { icon: <GraduationCap />, title: "Educación", desc: "Flujos específicos para escuelas y universidades." },
];

export default function AutomationGrid() {
  return (
    <section className="py-20 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Qué procesos podemos automatizar?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-background/40 border border-white/5 hover:border-primary/40 p-6 rounded-2xl hover:bg-background/60 transition-all cursor-default group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
