import { Link } from "wouter";
import logo from "/logo_procesia_ai_optimizado_1764272782903.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Process AI" className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-bold font-heading text-white">PROCESS <span className="text-primary">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Transformando negocios a través de la inteligencia artificial y la automatización estratégica.
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h4 className="font-bold text-white">Servicios</h4>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Automatización</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Machine Learning</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Dashboards</a>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h4 className="font-bold text-white">Empresa</h4>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Sobre Nosotros</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Casos de Éxito</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Process AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholders */}
          </div>
        </div>
      </div>
    </footer>
  );
}
