import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Heart } from 'lucide-react';

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco no Resultado',
      description: 'Desenvolvemos soluções que realmente transformam a vida das pessoas através do fitness.'
    },
    {
      icon: Users,
      title: 'Comunidade Forte',
      description: 'Acreditamos no poder da comunidade para motivar e inspirar mudanças duradouras.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos constantemente a excelência em tudo que fazemos, do código à experiência do usuário.'
    },
    {
      icon: Heart,
      title: 'Paixão pelo Fitness',
      description: 'Nossa paixão pelo fitness e bem-estar guia cada decisão que tomamos.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
              Sobre o BLDR
            </h1>
            <p className="text-xl text-background/90 max-w-3xl mx-auto">
              Somos uma equipe apaixonada por fitness e tecnologia, dedicada a criar 
              a melhor experiência de treino e bem-estar para nossos usuários.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Democratizar o acesso a treinos de qualidade profissional, tornando o fitness 
                acessível, personalizado e motivador para todos. Acreditamos que cada pessoa 
                merece ter as ferramentas necessárias para construir a melhor versão de si mesma.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam nossa jornada e moldam nossa cultura empresarial
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-border bg-card">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon size={32} className="text-background" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossa História</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  O BLDR nasceu da frustração de não encontrar um app fitness que realmente 
                  entendesse as necessidades individuais de cada pessoa. Como atletas e entusiastas 
                  do fitness, sabíamos que existia uma lacuna no mercado para uma solução verdadeiramente 
                  personalizada e inteligente.
                </p>
                <p>
                  Em 2022, reunimos nossa expertise em fitness, tecnologia e design para criar 
                  uma plataforma que não apenas oferecesse treinos, mas que entendesse e se adaptasse 
                  ao estilo de vida único de cada usuário. O resultado é o BLDR - um app que cresce 
                  e evolui junto com você.
                </p>
                <p>
                  Hoje, orgulhosamente servimos milhares de usuários ao redor do mundo, 
                  cada um em sua própria jornada de transformação pessoal. Nossa missão continua: 
                  tornar o fitness acessível, motivador e eficaz para todos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;