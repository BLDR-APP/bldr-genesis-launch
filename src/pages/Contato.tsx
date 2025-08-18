import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contato = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@bldr.app',
      description: 'Envie-nos um email e responderemos em até 24h'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (11) 99999-9999',
      description: 'Seg-Sex das 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'São Paulo, SP',
      description: 'Brasil'
    },
    {
      icon: MessageCircle,
      title: 'Suporte',
      content: 'suporte@bldr.app',
      description: 'Para questões técnicas e suporte'
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
              Entre em Contato
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Tem alguma dúvida, sugestão ou quer fazer parte da nossa jornada? 
              Adoraríamos ouvir de você!
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Envie sua Mensagem</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto</label>
                    <Input placeholder="Como podemos ajudar?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <Textarea 
                      placeholder="Conte-nos mais sobre sua dúvida ou sugestão..."
                      rows={6}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon size={24} className="text-background" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-1">{info.content}</p>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* FAQ */}
                <Card className="border-border bg-secondary">
                  <CardHeader>
                    <CardTitle>Perguntas Frequentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Como faço para cancelar minha assinatura?</h4>
                        <p className="text-muted-foreground text-sm">
                          Você pode cancelar a qualquer momento através do app, na seção "Minha Conta".
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">O app funciona offline?</h4>
                        <p className="text-muted-foreground text-sm">
                          Sim! Você pode baixar seus treinos e usá-los mesmo sem conexão com a internet.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Posso usar o app em múltiplos dispositivos?</h4>
                        <p className="text-muted-foreground text-sm">
                          Claro! Sua conta sincroniza automaticamente entre todos os seus dispositivos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;