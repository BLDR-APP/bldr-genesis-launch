import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Smartphone, Zap, Target, Users, Star, Download, Link, Rocket, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HavokSection } from "@/components/HavokSection";

// IMPORTS DOS EFEITOS ESPECIAIS
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ButtonMovingBorder } from "@/components/ui/moving-border";

// Componente Pop-up "Em Breve"
const ComingSoonDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-center flex flex-col items-center justify-center py-10 bg-zinc-950 border-zinc-800 text-white">
        <div className="h-16 w-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mb-4">
          <Rocket className="h-8 w-8 text-[#FFD700]" />
        </div>
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl font-bold text-white">Em breve!</DialogTitle>
          <DialogDescription className="text-center pt-2 text-base text-zinc-400">
            Estamos finalizando os últimos detalhes. <br/>
            Logo você terá acesso completo ao <strong className="text-[#FFD700]">BLDR</strong>.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

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

  const plans = [
    {
      name: "Mensal",
      price: "34,99",
      period: "/mês",
      description: "Flexibilidade total para o seu treino.",
      features: [
        "Acesso completo ao App",
        "Treinos gerados por IA",
        "Dieta personalizada",
        "Integração com Smartwatches",
        "Cancele quando quiser"
      ],
      highlight: false
    },
    {
      name: "Anual",
      price: "200,00",
      period: "/ano",
      description: "Economize mais de 50% no plano anual.",
      subPrice: "Equivalente a R$ 16,66/mês",
      features: [
        "Todos os benefícios do Mensal",
        "Acesso antecipado a novas features",
        "Prioridade no suporte",
        "Badges exclusivos na comunidade",
        "Melhor custo-benefício"
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
                   O ecossistema para performance mais avançado do Brasil. Treinos personalizados, acompanhamento profissional e resultados garantidos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* BOTÃO HERO COM BORDA MÓVEL */}
                    <ComingSoonDialog>
                        <ButtonMovingBorder
                            borderRadius="1.75rem"
                            className="bg-black text-white border-neutral-800 font-bold"
                            borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
                        >
                            <span className="flex items-center gap-2">
                                <Download className="h-5 w-5 text-[#FFD700]" /> Download App
                            </span>
                        </ButtonMovingBorder>
                    </ComingSoonDialog>
                    
                    <ComingSoonDialog>
                        <Button variant="outline" size="lg" className="h-14 rounded-[1.75rem] border-neutral-700 text-white hover:bg-neutral-800 px-8 bg-transparent">
                            Ver Demonstração
                        </Button>
                    </ComingSoonDialog>
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
            <h2 className="text-4xl font-bold mb-4 text-white">Invista em Você</h2>
            <p className="text-xl text-neutral-400">
              Planos simples e transparentes. Sem taxas escondidas.
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
                  <ComingSoonDialog>
                    <Button 
                        className={`w-full ${
                        plan.highlight 
                            ? "bg-[#FFD700] text-black font-bold hover:bg-yellow-500" 
                            : "bg-zinc-800 text-white hover:bg-zinc-700"
                        }`} 
                        size="lg"
                    >
                        Começar Agora
                    </Button>
                  </ComingSoonDialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - AGORA COM O BOTÃO NOVO */}
      <section className="py-20 relative overflow-hidden bg-black">
        <Spotlight className="top-0 left-0 transform rotate-180 opacity-50" fill="#FFD700" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para <span className="text-[#FFD700]">CONSTRUIR</span> seu futuro?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Junte-se à revolução fitness
          </p>
          
          <div className="flex justify-center">
            <ComingSoonDialog>
                {/* BOTÃO CTA FINAL COM BORDA MÓVEL */}
                <ButtonMovingBorder
                    borderRadius="1.75rem"
                    className="bg-zinc-900 text-white border-neutral-800 font-bold"
                    borderClassName="bg-[radial-gradient(#FFD700_40%,transparent_60%)]"
                >
                    <span className="flex items-center gap-2">
                        <Download className="h-5 w-5" /> Começar Agora
                    </span>
                </ButtonMovingBorder>
            </ComingSoonDialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
