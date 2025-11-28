import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contato@bldrapp.com.br",
      description: "Respondemos em até 24 horas"
    },
    //{
      //icon: <Phone className="h-6 w-6" />,
      //title: "Telefone",
      //value: "+55 (11) 9999-9999",
      //description: "Segunda a sexta, 9h às 18h"
   //},
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      value: "Belo Horizonte, MG",
      description: "Brasil"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      value: "9h às 18h",
      description: "Segunda a sexta-feira"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Sócios",
      value: "pedro.menin@bldrapp.com.br pedro.lacerda@bldrapp.com.br joao.rocha@bldrapp.com.br arthur.carvalho@bldrapp.com.br",
      description: "Respondemos em até 24 horas"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos aqui para ajudar você em sua jornada fitness
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nome *
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Assunto *
                    </label>
                    <Input placeholder="Como podemos ajudar?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Descreva sua dúvida ou sugestão..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary text-black font-semibold hover:opacity-90">
                    Enviar Mensagem
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                    <CardContent className="flex items-center p-6">
                      <div className="p-3 bg-gradient-primary rounded-full mr-4 text-black">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-lg text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-12">
                <Card className="bg-gradient-hero border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Perguntas Frequentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Antes de entrar em contato, que tal conferir nossa seção de perguntas frequentes? 
                      Talvez sua dúvida já tenha sido respondida!
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                      Ver FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
