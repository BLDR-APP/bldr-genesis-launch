import { Button } from '@/components/ui/button';
import { Download, Star } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-background">
            Comece Sua Transformação Hoje
          </h2>
          
          <p className="text-xl text-background/90 leading-relaxed">
            Junte-se a milhares de pessoas que já transformaram suas vidas com o BLDR. 
            Baixe agora e receba 7 dias grátis premium!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 bg-background text-foreground hover:bg-background/90"
            >
              <Download className="mr-2" size={20} />
              Baixar para iOS
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-background text-background hover:bg-background hover:text-foreground"
            >
              <Download className="mr-2" size={20} />
              Baixar para Android
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-background/90">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9</span>
            <span className="text-background/70">• Mais de 10.000 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;