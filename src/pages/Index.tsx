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
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// NOVOS IMPORTS:
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ButtonMovingBorder } from "@/components/ui/moving-border";

const ComingSoonDialog = ({ children }) => {
  // ... (mantenha o código do Dialog igual ao anterior)
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-center flex flex-col items-center justify-center py-10">
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Rocket className="h-8 w-8 text-primary" />
        </div>
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl font-bold">Em breve!</DialogTitle>
          <DialogDescription className="text-center pt-2 text-base">
            Estamos finalizando os últimos detalhes. <br/>
            Logo você terá acesso completo ao <strong>BLDR</strong>.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const Index = () => {
  // ... (mantenha os arrays founders, features e plans iguais)
  const founders = [ /* ... mantenha seus dados ... */ 
    { name: "Pedro Menin", role: "Sócio & Fundador", description: "...", image: "/PM.jpg" },
    { name: "Pedro Lacerda", role: "Sócio & Co-fundador", description: "...", image: "/PL.jpg" },
    { name: "Arthur Carvalho", role: "Sócio & Co-fundador", description: "...", image: "/Carcs.png" },
    { name: "João Luiz Rocha", role: "Sócio & Co-fundador", description: "...", image: "/JR.png" }
  ];
  
  const features = [ /* ... mantenha seus dados ... */ 
    { icon: <Target className="h-6 w-6" />, title: "Treinos Personalizados", description: "IA que cria treinos únicos baseados nos seus objetivos e histórico" },
    { icon: <Zap className="h-6 w-6" />, title: "Resultados Rápidos", description: "Metodologia comprovada para acelerar seus resultados" },
    { icon: <Users className="h-6 w-6" />, title: "Comunidade Ativa", description: "Conecte-se com outros atletas e compartilhe sua jornada" },
    { icon: <Smartphone className="h-6 w-6" />, title: "App Intuitivo", description: "Interface simples e elegante para uma experiência premium" },
  ];

  const plans = [ /* ... mantenha seus dados ... */ 
     { name: "Mensal", price: "34,99", period: "/mês", description: "Flexibilidade total.", features: ["Acesso completo", "Treinos IA", "Dieta", "Integração", "Cancelar qdo quiser"], highlight: false },
     { name: "Anual", price: "200,00", period: "/ano", description: "Economize 50%.", subPrice: "R$ 16,66/mês", features: ["Tudo do Mensal", "Novas features", "Suporte VIP", "Badges", "Custo-benefício"], highlight: true }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION RENOVADA 
        Combinação: Spotlight (fundo) + ContainerScroll (3D) + ButtonMovingBorder (Botão)
      */}
      <section className="flex flex-col overflow-hidden bg-black relative">
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
                   O ecossistema fitness mais avançado do Brasil. Treinos personalizados, acompanhamento profissional e resultados garantidos.
                </p>
                
                <div className="flex gap-4">
                    {/* BOTÃO COM BORDA MÓVEL (Moving Border) */}
                    <ComingSoonDialog>
                        <ButtonMovingBorder
                            borderRadius="1.75rem"
                            className="bg-black text-white border-neutral-800 font-bold"
                            borderClassName="bg-[radial-gradient(var(--yellow-500)_40%,transparent_60%)]" // Brilho Amarelo
                        >
                            <span className="flex items-center gap-2">
                                <Download className="h-5 w-5" /> Download App
                            </span>
                        </ButtonMovingBorder>
                    </ComingSoonDialog>
                    
                    {/* Botão Secundário Normal */}
                    <ComingSoonDialog>
                        <Button variant="outline" size="lg" className="h-16 rounded-[1.75rem] border-neutral-700 text-white hover:bg-neutral-800 px-8">
                            Ver Demo
                        </Button>
                    </ComingSoonDialog>
                </div>
              </div>
            </>
          }
        >
          {/* MOCKUP 3D (Imagem do App)
             Troque o src pela captura de tela do BLDR
          */}
          <img
            src="/app_mockup_placeholder.png" 
            alt="BLDR App Screenshot"
            className="mx-auto rounded-2xl object-cover h-full w-full object-left-top draggable-false"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* ... (O RESTO DO CÓDIGO DAS SEÇÕES FEATURES, FOUNDERS, PRICING MANTÉM IGUAL AO ANTERIOR) ... */}
      
      {/* Exemplo rápido da seção Features para garantir que não quebrou */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">Por que <span className="text-[#FFD700]">BLDR</span>?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 h-full">
                    <div className="text-center flex flex-col items-center h-full">
                        <div className="mb-4 p-3 bg-[#FFD700] rounded-full w-fit text-black">{feature.icon}</div>
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">{feature.title}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                    </div>
                </BackgroundGradient>
                ))}
            </div>
        </div>
      </section>
      
      {/* ... Repita Founders, Pricing e Footer aqui ... */}
      <Footer />
    </div>
  );
};

export default Index;
