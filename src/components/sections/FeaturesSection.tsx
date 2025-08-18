import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell, Target, Users, Trophy, Heart, Calendar } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Treinos Personalizados',
    description: 'Planos de treino adaptados ao seu nível, objetivos e disponibilidade de tempo.'
  },
  {
    icon: Target,
    title: 'Metas Inteligentes',
    description: 'Defina e acompanhe seus objetivos com nosso sistema de metas baseado em IA.'
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Conecte-se com outros atletas, compartilhe conquistas e encontre motivação.'
  },
  {
    icon: Trophy,
    title: 'Sistema de Conquistas',
    description: 'Ganhe medalhas e desbloqueie conquistas conforme alcança seus objetivos.'
  },
  {
    icon: Heart,
    title: 'Monitoramento de Saúde',
    description: 'Acompanhe batimentos cardíacos, calorias queimadas e outros indicadores vitais.'
  },
  {
    icon: Calendar,
    title: 'Planejamento Flexível',
    description: 'Organize seus treinos de acordo com sua rotina e nunca perca uma sessão.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos que{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transformam
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra as funcionalidades que fazem do BLDR o app fitness mais completo do mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={32} className="text-background" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;