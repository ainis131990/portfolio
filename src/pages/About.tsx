import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import ScrollRevealText from "@/components/ScrollRevealText";
import { Mail, MapPin } from "lucide-react";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const clients = [
    "client",
    "client",
    "client",
    "client",
    "client",
    "client",
    "client",
    "client",
    "client"
  ];

  const services = [
    "Brand Identity",
    "Visual Systems",
    "Art Direction",
    "Typography",
    "Digital Design",
    "Print Design",
    "Packaging"
  ];


  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar />
        
        {/* Hero Bio Section - Takes ~70% of the viewport */}
        <section className="min-h-[60vh] max-h-[70vh] flex flex-col justify-center px-3 pt-24 pb-8">
          <div className="max-w-[95%]">
            <ScrollRevealText 
              text="Art director based in Latvia, specializing in brand identities built on clarity and purpose."
              className="text-lg font-medium tracking-tight leading-[1.4]"
            />
          </div>
        </section>

        {/* Bottom Info Section - Horizontal Layout */}
        <section className="px-3 pb-32" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 fade-in-up">
            {/* Profile Picture */}
            <div className="flex items-start justify-center md:justify-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-muted border border-border">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Selected Clients */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-4 border-b border-border pb-2">
                Selected Clients
              </h3>
              <ul className="space-y-1">
                {clients.map((client) => (
                  <li key={client} className="text-sm">
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-4 border-b border-border pb-2">
                Services
              </h3>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service} className="text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-4 border-b border-border pb-2">
                Say Hi!
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:ainis1990@gmail.com"
                  className="text-sm hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  <Mail size={14} />
                  ainis1990@gmail.com
                </a>
                <p className="text-sm flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  São Paulo, Brazil
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
};

export default About;
