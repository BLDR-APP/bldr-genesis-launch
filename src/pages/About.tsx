import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Trophy, Users, Zap, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      // Adicionei 'text-[#FFD700]' aqui
      icon: <Trophy className="h-8 w-8 text-[#FFD700]" />,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em tudo que fazemos, oferecendo a melhor experiência possível."
    },
    {
      // E aqui
      icon: <Users className="h-8 w-8 text-[#FFD700]" />,
      title: "Comunidade",
      description: "Acreditamos que juntos somos mais fortes. Nossa comunidade é o coração do BLDR."
    },
    {
      // E aqui
      icon: <Zap className="h-8 w-8 text-[#FFD700]" />,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para revolucionar a forma como você treina."
    },
    {
      // E aqui
      icon: <Target className="h-8 w-8 text-[#FFD700]" />,
      title: "Resultados",
      description: "Nosso foco é entregar resultados concretos e mensuráveis para nossos usuários."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            Sobre o <span className="text-[#FFD700]">BLDR</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Conheça nossa história, missão e valores
          </p>
        </div>

        {/* Nossa História */}
        <section className="mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Nossa História</h2>
            <div className="text-zinc-300 space-y-6 text-lg leading-relaxed">
              <p>
                O BLDR nasceu da paixão de quatro amigos por fitness e tecnologia. Frustrados com apps 
                genéricos que não entregavam resultados reais, decidimos criar algo diferente: uma 
                plataforma que realmente entendesse cada usuário e que adaptasse às suas necessidades específicas.
              </p>
              <p>
                Em 2025, após meses de pesquisa e desenvolvimento, lançamos o BLDR com o objetivo 
                de democratizar o acesso a treinos de alta qualidade e acompanhamento profissional.
              </p>
              <p>
                Hoje, milhares de pessoas já transformaram suas vidas com nossa plataforma, e continuamos 
                inovando para oferecer a melhor experiência fitness do mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Missão e Visão (Com Efeito Glow Premium) */}
        <section className="mb-24">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Missão */}
                <BackgroundGradient className="rounded-[22px] p-8 bg-zinc-900 h-full flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Nossa Missão</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                        Democratizar o acesso a treinos de qualidade profissional, utilizando tecnologia 
                        avançada para personalizar cada jornada fitness e garantir resultados reais e duradouros.
                    </p>
                </BackgroundGradient>

                {/* Visão */}
                <BackgroundGradient className="rounded-[22px] p-8 bg-zinc-900 h-full flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Nossa Visão</h3>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                        Ser a plataforma fitness número 1 do Brasil, reconhecida pela excelência em 
                        personalização, resultados e experiência do usuário, transformando milhões 
                        de vidas através do poder do fitness.
                    </p>
                </BackgroundGradient>
             </div>
        </section>

        {/* Valores (Com Novo Efeito Hover) */}
        <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Nossos Valores</h2>
            <HoverEffect items={values} />
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default About;
