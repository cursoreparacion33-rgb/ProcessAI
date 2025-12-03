import { motion } from "framer-motion";
import { BadgeCheck, Brain } from "lucide-react";
import hernanImg from "@assets/IMG-20251124-WA0015_1764499620499.jpg";
import gabrielImg from "@assets/IMG-20251127-WA0037_1764499620567.jpg";
import javierImg from "@assets/1764020401442_1764272827525.jpg";

const teamMembers = [
  {
    name: "Hernán Capettini",
    title: "Especialista en Gestión Empresarial",
    badge: "Finanzas & Negocios",
    image: hernanImg,
    color: "primary",
    credentials: [
      "Contador Público (UBA)",
      "Licenciado en Administración de Empresas",
      "Master en Mercados de Capitales (Universidad de Barcelona)",
      "Posgrado en Management Integral (UCA)",
    ],
  },
  {
    name: "Gabriel Bohl",
    title: "Especialista en Procesos Empresariales",
    badge: "Procesos Empresariales",
    image: gabrielImg,
    color: "accent",
    credentials: [
      "Contador Público (UADE)",
      "Especialización en Impuestos",
      "Master en Gestión de Desarrollos Inmobiliarios",
      "Especialización en Mercados de Capitales",
      "Master en IA",
    ],
  },
  {
    name: "Javier A. Rodriguez",
    title: "Director de Tecnología",
    badge: "Especialista en Sistemas e IA",
    image: javierImg,
    color: "cyan",
    credentials: [
      "Diplomatura en IA y Machine Learning",
      "Diseño de soluciones de IA a medida",
      "Experiencia formando equipos y capacitando directivos",
      "Implementación de prototipos rápidos de alto impacto",
    ],
  },
];

export default function TeamProfile() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute left-0 top-1/2 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full -z-10 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-gray-400">Profesionales con experiencia integral en tecnología y negocios</p>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Image */}
              <motion.div
                className="flex-1 relative"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className={`relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-md mx-auto`}
                >
                  <div
                    className={`absolute inset-0 mix-blend-overlay ${
                      member.color === "primary"
                        ? "bg-primary/20"
                        : member.color === "accent"
                        ? "bg-accent/20"
                        : "bg-cyan-500/20"
                    }`}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                </div>
                <div
                  className={`absolute ${idx % 2 === 0 ? "-bottom-6 -right-6" : "-bottom-6 -left-6"} w-full h-full border-2 ${
                    member.color === "primary"
                      ? "border-primary/20"
                      : member.color === "accent"
                      ? "border-accent/20"
                      : "border-cyan-500/20"
                  } rounded-2xl -z-10 hidden md:block`}
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${
                    member.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : member.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-cyan-500/10 text-cyan-400"
                  } text-xs font-bold uppercase tracking-wider mb-6`}
                >
                  <Brain className="w-3 h-3" /> {member.badge}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
                  {member.name}
                </h2>
                <p
                  className={`text-xl font-medium mb-6 ${
                    member.color === "primary"
                      ? "text-primary"
                      : member.color === "accent"
                      ? "text-accent"
                      : "text-cyan-400"
                  }`}
                >
                  {member.title}
                </p>

                <ul className="space-y-3">
                  {member.credentials.map((cred, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`mt-1 p-1 rounded-full flex-shrink-0 ${
                          member.color === "primary"
                            ? "bg-primary/10"
                            : member.color === "accent"
                            ? "bg-accent/10"
                            : "bg-cyan-500/10"
                        }`}
                      >
                        <BadgeCheck
                          className={`w-4 h-4 ${
                            member.color === "primary"
                              ? "text-primary"
                              : member.color === "accent"
                              ? "text-accent"
                              : "text-cyan-400"
                          }`}
                        />
                      </div>
                      <span className="text-gray-200">{cred}</span>
                    </motion.div>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
