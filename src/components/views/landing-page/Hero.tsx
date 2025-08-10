import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WhatsAppCTA } from "@/components/utils/whatsapp-cta";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <ShineBorder className="p-8 rounded-2xl">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Floating badge */}
              <BlurFade>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 px-6 py-2 mb-8 shadow-glow backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-primary mr-2" />
                  <SparklesText text="Agencia de viajes premium en Bolivia" />
                </div>
              </BlurFade>

              <BoxReveal>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
                  Viajes inolvidables, planificación experta
                  <br />
                  <span className="text-primary">
                    Weddings • Quinceañera • Eventos • Destinos
                  </span>
                </h1>
              </BoxReveal>

              <BlurFade delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Experiencias a medida con seguridad, logística y atención
                  personalizada. Escríbenos por WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <WhatsAppCTA
                    template="Hola, me interesa {itemTitle} — desde {url}"
                    variables={{ itemTitle: "GABYTOPTRAVEL", url: "" }}
                    label="Consultar por WhatsApp"
                    size="lg"
                  />
                  <Link
                    href="/destinations"
                    className="inline-flex items-center text-foreground hover:text-primary transition-colors px-8 py-3"
                  >
                    Ver destinos
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Stats section with enhanced styling */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                {
                  label: "Oficinas",
                  value: "Santa Cruz • Cochabamba • La Paz",
                },
                { label: "Experiencia", value: "+10 años" },
                { label: "Satisfacción", value: "4.9/5" },
              ].map((stat, i) => (
                <BlurFade
                  key={stat.label}
                  delay={i * 0.1}
                  className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </BlurFade>
              ))}
            </div>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
}
