import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Zap, Target, Users, Star, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-fitness.jpg";

const Index = () => {
  const founders = [
    {
      name: "Pedro Menin",
      role: "CEO & Fundador",
      description: "Visionário por trás do app, lidera a estratégia e a construção do futuro da plataforma fitness, conectando inovação e comunidade.",
      image: "https://imgur.com/IosFTGs"
    },
    {
      name: "Pedro Lacerda",
      role: "CBO & Co-fundador", 
      description: "Especialista em networking e expansão, responsável por fechar parcerias estratégicas com marcas, academias e players do mercado fitness.",
      image: "https://imgur.com/a/gATOLQK"
    },
    {
      name: "Arthur Carvalho",
      role: "CFO & Co-fundador",
      description: "Cuida da saúde financeira da empresa, estrutura modelos de monetização e prepara o terreno para investidores e crescimento sustentável.",
      image: "https://imgur.com/a/VHrpKMX"
    },
    {
      name: "João Luiz Rocha",
      role: "CSO & Co-fundador",
      description: "Apaixonado por treino e academia, traz conhecimento técnico para garantir que o app seja referência em performance, saúde e bem-estar.",
      image: "https://imgur.com/a/blCHULH"
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Construa sua</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">MELHOR VERSÃO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            O app fitness mais avançado do Brasil. Treinos personalizados, acompanhamento profissional e resultados garantidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-black font-semibold hover:opacity-90 shadow-gold">
              <Download className="mr-2 h-5 w-5" />
              Download Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Por que escolher o <span className="text-primary">BLDR</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Tecnologia de ponta para revolucionar seus treinos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit text-black">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conheça Nosso Time</h2>
            <p className="text-xl text-muted-foreground">
              A equipe por trás da revolução fitness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-gold transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-primary group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-primary p-1 rounded-full">
                      <Star className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{founder.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {founder.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-muted-foreground">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-primary">CONSTRUIR</span> seu futuro?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com o BLDR
          </p>
          <Button size="lg" className="bg-gradient-primary text-black font-semibold hover:opacity-90 shadow-gold">
            <Download className="mr-2 h-5 w-5" />
            Começar Agora - Grátis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
