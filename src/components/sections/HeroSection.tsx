import { Button } from '@/components/ui/button';
import { Play, Download } from 'lucide-react';
import heroImage from '@/assets/hero-fitness.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Construa o{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Melhor
            </span>{' '}
            de Você
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            O app fitness mais completo para transformar seu corpo e sua mente. 
            Treinos personalizados, nutrição inteligente e acompanhamento profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Download className="mr-2" size={20} />
              Baixar Agora
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2" size={20} />
              Ver Demonstração
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <p className="text-muted-foreground">Usuários Ativos</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <p className="text-muted-foreground">Treinos Completados</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <p className="text-muted-foreground">Avaliação nas Lojas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;