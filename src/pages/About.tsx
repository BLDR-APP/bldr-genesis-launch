import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Zap, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Excelência",
      description: "Buscamos sempre a perfeição em tudo que fazemos, oferecendo a melhor experiência possível."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Comunidade",
      description: "Acreditamos que juntos somos mais fortes. Nossa comunidade é o coração do BLDR."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para revolucionar a forma como você treina."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Resultados",
      description: "Nosso foco é entregar resultados concretos e mensuráveis para nossos usuários."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o <span className="text-primary">BLDR</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça nossa história, missão e valores
            </p>
          </div>

          {/* Nossa História */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                O BLDR nasceu da paixão de quatro amigos por fitness e tecnologia. Frustrados com apps 
                genéricos que não entregavam resultados reais, decidimos criar algo diferente: uma 
                plataforma que realmente entendesse cada usuário e que adaptasse às suas necessidades específicas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em 2025, após meses de pesquisa e desenvolvimento, lançamos o BLDR com o objetivo 
                de democratizar o acesso a treinos de alta qualidade e acompanhamento profissional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje, milhares de pessoas já transformaram suas vidas com nossa plataforma, e continuamos 
                inovando para oferecer a melhor experiência fitness do mercado.
              </p>
            </div>
          </section>

          {/* Missão */}
          <section className="mb-16">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  Democratizar o acesso a treinos de qualidade profissional, utilizando tecnologia 
                  avançada para personalizar cada jornada fitness e garantir resultados reais e duradouros.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Valores */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit text-black">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Visão */}
          <section>
            <Card className="bg-gradient-hero border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  Ser a plataforma fitness número 1 do Brasil, reconhecida pela excelência em 
                  personalização, resultados e experiência do usuário, transformando milhões 
                  de vidas através do poder do fitness.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
