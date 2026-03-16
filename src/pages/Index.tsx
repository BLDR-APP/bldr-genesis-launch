import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  Smartphone, Zap, Target, Users, Star, Link, Check,
  Brain, Utensils, LineChart, Footprints, Droplets
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HavokSection } from "@/components/HavokSection";

// IMPORTS DOS EFEITOS ESPECIAIS
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ButtonMovingBorder } from "@/components/ui/moving-border";

const Index = () => {
  const founders = [
    {
      name: "Pedro Menin",
      role: "Sócio & Fundador",
      description: "Visionário por trás do app, lidera a estratégia e a construção do futuro da plataforma fitness, conectando inovação e comunidade.",
      image: "/PM.jpg"
    },
    {
      name: "Pedro Lacerda",
      role: "Sócio & Co-fundador", 
      description: "Especialista em networking e expansão, responsável por fechar parcerias estratégicas com marcas, academias e players do mercado fitness.",
      image: "/PL.jpg"
    },
    {
      name: "Arthur Carvalho",
      role: "Sócio & Co-fundador",
      description: "Cuida da saúde financeira da empresa, estrutura modelos de monetização e prepara o terreno para investidores e crescimento sustentável.",
      image: "/Carcs.png"
    },
    {
      name: "João Luiz Rocha",
      role: "Sócio & Co-fundador",
      description: "Apaixonado por treino e academia, traz conhecimento técnico para garantir que o app seja referência em performance, saúde e bem-estar.",
      image: "/JL.jpg"
    }
  ];

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Treinos Personalizados",
      description: "IA que cria treinos únicos baseados nos seus objetivos e histórico"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Resultados Rápidos",
      description: "Metodologia comprovada para acelerar seus resultados"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros atletas e compartilhe sua jornada"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "App Intuitivo",
      description: "Interface simples e elegante para uma experiência premium"
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Integrações",
      description: "Estamos desenvolvendo integrações com os maiores players: Oura Ring, Whoop, Apple Watch, Garmin."
    }
  ];

  const detailedFeatures = [
    {
      icon: <Brain className="h-8 w-8 text-[#FFD700]" />,
      title: "IA & Chef Inteligente",
      description: "Treinos baseados no seu TDEE ou modo 'Treino Livre'. Além disso, nossa IA gera receitas completas com macros calculados usando seus ingredientes ou tipos de refeição."
    },
    {
      icon: <Droplets className="h-8 w-8 text-[#FFD700]" />,
      title: "Nutrição Automática",
      description: "Calculadora de calorias e macros automática ao registrar refeições. Acompanhe também sua ingestão diária de água de forma simples."
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#FFD700]" />,
      title: "Dashboard de Performance",
      description: "Gráficos de evolução corporal (Peso, Gordura, Músculo), Heatmap de constância de treino, aderência à dieta e diário de fotos (Antes/Depois)."
    },
    {
      icon: <Footprints className="h-8 w-8 text-[#FFD700]" />,
      title: "BLDR CLUB & Corrida",
      description: "Experiência Premium: Gamificação com recompensas, Biblioteca Exclusiva, IA HAVOK e Modo Corrida com rastreamento via GPS."
    }
  ];

  const plans = [
    {
      name: "Mensal",
      price: "34,90",
      period: "/mês",
      description: "Comece sua jornada no BLDR CLUB.",
      features: [
        "Acesso à IA HAVOK e Chef IA",
        "Modo Corrida (GPS Integrado)",
        "Biblioteca de Treinos Exclusiva",
        "Gamificação e Recompensas",
        "Analytics Avançados & Fotos",
        "Badge 'BLDR CLUB' no Perfil",
      ],
      highlight: false
    },
    {
      name: "Anual",
      price: "199,99",
      period: "/ano",
      description: "Economize mais de 50% no plano anual.",
      subPrice: "Equivalente a R$ 16,66/mês",
      features: [
        "Todos os benefícios do Mensal",
        "Melhor custo-benefício",
      ],
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="flex flex-col overflow-hidden bg-black relative pt-40 md:pt-40">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
                Construa sua <br />
                <span className="text-[#FFD700] drop-shadow-md">MELHOR VERSÃO</span>
              </h1>
              
              <div className="flex flex-col items-center justify-center gap-6 mt-8 mb-12">
                <p className="font-normal text-base md:text-xl text-neutral-300 max-w-2xl text-center mx-auto">
                   O ecossistema definitivo para sua performance. Domine seus treinos, controle sua dieta e monitore sua evolução em um único lugar.
                </p>
                
                {/* BOTÕES DAS LOJAS (COM BORDA ANIMADA) */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 w-full px-4">
                  <a
                    href="https://apps.apple.com/app/bldr/id6754264412"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <ButtonMovingBorder
                      borderRadius="1.2rem"
                      className="bg-zinc-900 text-white border-neutral-800 p-0 w-full hover:bg-zinc-800 transition-all"
                      borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
                    >
                      <div className="flex items-center justify-center gap-3 h-14 px-6 w-full">
                        <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor" className="shrink-0">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                        <div className="flex flex-col items-start justify-center">
                          <span className="text-[10px] uppercase text-zinc-400 font-bold mb-0.5 whitespace-nowrap">Baixar na</span>
                          <span className="text-lg font-bold leading-none whitespace-nowrap">App Store</span>
                        </div>
                      </div>
                    </ButtonMovingBorder>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.bldr_fitness.app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <ButtonMovingBorder
                      borderRadius="1.2rem"
                      className="bg-zinc-900 text-white border-neutral-800 p-0 w-full hover:bg-zinc-800 transition-all"
                      borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
                    >
                      <div className="flex items-center justify-center gap-3 h-14 px-6 w-full">
                        <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor" className="shrink-0">
                          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                        <div className="flex flex-col items-start justify-center">
                          <span className="text-[10px] uppercase text-zinc-400 font-bold mb-0.5 whitespace-nowrap">Disponível no</span>
                          <span className="text-lg font-bold leading-none whitespace-nowrap">Google Play</span>
                        </div>
                      </div>
                    </ButtonMovingBorder>
                  </a>
                </div>

              </div>
            </>
          }
        >
          {/* MOCKUP IMAGE */}
          <img
            src="/Dashboard.png" 
            alt="BLDR App Interface"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top draggable-false"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <HavokSection />

      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Por que escolher o <span className="text-[#FFD700]">BLDR</span>?
            </h2>
            <p className="text-xl text-neutral-400">
              Tecnologia de ponta para revolucionar seus treinos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {features.map((feature, index) => (
              <BackgroundGradient key={index} className="rounded-[22px] p-6 bg-zinc-900 h-full flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#FFD700] rounded-full w-fit text-black">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {feature.description}
                  </p>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DETALHADA: Por dentro do App */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">Por dentro do <span className="text-[#FFD700]">BLDR</span></h2>
                <p className="text-xl text-neutral-400">
                    Ferramentas profissionais simplificadas para você
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {detailedFeatures.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#FFD700]/50 transition-colors duration-300">
                        <div className="flex-shrink-0 p-4 bg-zinc-800 rounded-xl">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Conheça Nosso Time</h2>
            <p className="text-xl text-neutral-400">
              A equipe por trás da revolução fitness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-[#FFD700]/50 transition-all duration-300 group hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#FFD700] group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#FFD700] p-1 rounded-full">
                      <Star className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white">{founder.name}</CardTitle>
                  <CardDescription className="text-[#FFD700] font-semibold">
                    {founder.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-zinc-400">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Seja <span className="text-[#FFD700]">BLDR CLUB</span></h2>
            <p className="text-xl text-neutral-400">
              Desbloqueie todo o seu potencial com o plano premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`flex flex-col relative ${
                  plan.highlight 
                    ? "bg-zinc-900 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.15)] transform md:-translate-y-4" 
                    : "bg-zinc-900 border-zinc-800 hover:border-[#FFD700]/30"
                } transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FFD700] text-black text-sm font-bold px-4 py-1 rounded-full">
                      Melhor Opção
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2 text-white">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center text-white">
                    <span className="text-sm font-medium text-zinc-400 mr-1">R$</span>
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-zinc-400">{plan.period}</span>
                  </div>
                  {plan.subPrice && (
                    <p className="text-sm text-[#FFD700] font-medium mt-2">{plan.subPrice}</p>
                  )}
                  <CardDescription className="mt-4 text-base text-zinc-400">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-zinc-300">
                        <Check className="h-5 w-5 text-[#FFD700] mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <a href="#download" className="w-full">
                    <Button 
                        className={`w-full ${
                        plan.highlight 
                            ? "bg-[#FFD700] text-black font-bold hover:bg-yellow-500 hover:scale-105" 
                            : "bg-zinc-800 text-white hover:bg-zinc-700 hover:scale-105"
                        } transition-all duration-300`} 
                        size="lg"
                    >
                        Assinar e Baixar
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - AGORA COM ID DOWNLOAD */}
      <section id="download" className="py-20 relative overflow-hidden bg-black">
        <Spotlight className="top-0 left-0 transform rotate-180 opacity-50" fill="#FFD700" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para <span className="text-[#FFD700]">CONSTRUIR</span> seu futuro?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Junte-se à revolução fitness e faça parte do clube.
          </p>
          
          {/* BOTÕES DAS LOJAS NO RODAPÉ (COM BORDA ANIMADA) */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 w-full max-w-md mx-auto px-4">
            <a
              href="https://apps.apple.com/app/bldr/id6754264412"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <ButtonMovingBorder
                borderRadius="1.2rem"
                className="bg-zinc-900 text-white border-neutral-800 p-0 w-full hover:bg-zinc-800 transition-all"
                borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
              >
                <div className="flex items-center justify-center gap-3 h-14 px-6 w-full">
                  <svg viewBox="0 0 384 512" width="28" height="28" fill="currentColor" className="shrink-0">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[10px] uppercase text-zinc-400 font-bold mb-0.5 whitespace-nowrap">Baixar na</span>
                    <span className="text-lg font-bold leading-none whitespace-nowrap">App Store</span>
                  </div>
                </div>
              </ButtonMovingBorder>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.bldr_fitness.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <ButtonMovingBorder
                borderRadius="1.2rem"
                className="bg-zinc-900 text-white border-neutral-800 p-0 w-full hover:bg-zinc-800 transition-all"
                borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
              >
                <div className="flex items-center justify-center gap-3 h-14 px-6 w-full">
                  <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor" className="shrink-0">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[10px] uppercase text-zinc-400 font-bold mb-0.5 whitespace-nowrap">Disponível no</span>
                    <span className="text-lg font-bold leading-none whitespace-nowrap">Google Play</span>
                  </div>
                </div>
              </ButtonMovingBorder>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
