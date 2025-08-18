import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';
import teamMember1 from '@/assets/team-member-1.jpg';
import teamMember2 from '@/assets/team-member-2.jpg';
import teamMember3 from '@/assets/team-member-3.jpg';
import teamMember4 from '@/assets/team-member-4.jpg';

const teamMembers = [
  {
    name: 'Carlos Silva',
    role: 'CEO & Co-fundador',
    image: teamMember1,
    description: 'Ex-atleta profissional com 15 anos de experiência em fitness e empreendedorismo digital.'
  },
  {
    name: 'Ana Martins',
    role: 'Head de Treinamento',
    image: teamMember2,
    description: 'Personal trainer certificada e especialista em performance esportiva com mais de 10 anos de experiência.'
  },
  {
    name: 'Ricardo Tech',
    role: 'CTO',
    image: teamMember3,
    description: 'Desenvolvedor senior com expertise em IA e machine learning aplicados ao fitness.'
  },
  {
    name: 'Juliana Costa',
    role: 'Nutricionista Chefe',
    image: teamMember4,
    description: 'Mestre em nutrição esportiva e especialista em planos alimentares personalizados.'
  }
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conheça Nossa{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Equipe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados que trabalham juntos para revolucionar sua jornada fitness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;