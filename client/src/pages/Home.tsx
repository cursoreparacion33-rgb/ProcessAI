import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AutomationGrid from "@/components/AutomationGrid";
import Services from "@/components/Services";
import TeamProfile from "@/components/TeamProfile";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <AutomationGrid />
        <Services />
        <TeamProfile />
        <Methodology />
        
        {/* Case Studies Placeholder */}
        <section id="casos-de-exito" className="py-20 bg-card/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold font-heading text-white mb-8">Casos de Éxito</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {["Pyme Logística", "Institución Educativa"].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-all cursor-pointer group">
                  <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                  <p className="text-gray-400 mb-4">Automatización de procesos que resultó en un 40% de ahorro operativo.</p>
                  <span className="text-primary text-sm font-semibold group-hover:underline">Leer caso completo →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="container relative z-10 mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              ¿Listo para automatizar tu futuro?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Agenda una llamada de diagnóstico gratuita y descubre dónde estás perdiendo tiempo y dinero.
            </p>
            <ContactDialog trigger={
              <button className="bg-primary text-primary-foreground text-lg font-bold px-10 py-4 rounded-full shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] transition-all duration-300 cursor-pointer">
                Agendar mi diagnóstico gratis
              </button>
            } />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
