import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Criptografia Avançada",
      description: "Todos os dados são criptografados com padrão AES-256 em trânsito e em repouso."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Autenticação Segura",
      description: "Sistema de autenticação multifator para proteger sua conta contra acessos não autorizados."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Monitoramento 24/7",
      description: "Monitoramento contínuo para detectar e prevenir atividades suspeitas ou maliciosas."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infraestrutura Segura",
      description: "Servidores em datacenters certificados com as mais altas normas de segurança física e digital."
    }
  ];

  const bestPractices = [
    "Use uma senha forte e única para sua conta BLDR",
    "Ative a autenticação de dois fatores quando disponível",
    "Mantenha o aplicativo sempre atualizado",
    "Não compartilhe suas credenciais com terceiros",
    "Faça logout ao usar dispositivos compartilhados",
    "Verifique regularmente a atividade de sua conta"
  ];

  const certifications = [
    //{ name: "ISO 27001", description: "Certificação de Gestão de Segurança da Informação" },
    { name: "LGPD", description: "Conformidade com a Lei Geral de Proteção de Dados" },
    //{ name: "SOC 2", description: "Auditoria de Controles de Segurança e Disponibilidade" },
    //{ name: "GDPR", description: "Conformidade com o Regulamento Geral de Proteção de Dados" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Segurança e <span className="text-primary">Proteção</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua segurança é nossa prioridade máxima
            </p>
          </div>

          {/* Compromisso */}
          <section className="mb-16">
            <Card className="bg-gradient-hero border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  Nosso Compromisso com a Segurança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  No BLDR, implementamos as mais avançadas tecnologias e práticas de segurança 
                  para proteger seus dados pessoais, informações de saúde e privacidade. 
                  Nossa abordagem de segurança é multicamada e está em constante evolução.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Recursos de Segurança */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Recursos de Segurança</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit text-black">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Melhores Práticas */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Melhores Práticas de Segurança</h2>
                <p className="text-muted-foreground mb-6">
                  Para garantir a máxima segurança de sua conta, recomendamos seguir estas práticas:
                </p>
                <div className="space-y-3">
                  {bestPractices.map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{practice}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Card className="bg-gradient-card border-border h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                      Relatório de Vulnerabilidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Se você descobrir uma vulnerabilidade de segurança, entre em contato 
                      conosco imediatamente através do nosso programa de divulgação responsável.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Email de Segurança:</strong><br />
                      <span className="text-primary">contato@bldrapp.com.br</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Certificações */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Certificações e Conformidade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-gold transition-all duration-300">
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 bg-gradient-primary rounded-full mr-4 text-black">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Incidentes de Segurança */}
          <section className="mb-16">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Transparência em Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acreditamos na transparência total com nossos usuários. Caso ocorra algum 
                  incidente de segurança que possa afetar seus dados, você será notificado 
                  imediatamente através do aplicativo e por email.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Status atual:</strong> 
                  <span className="text-primary ml-2">✓ Todos os sistemas operando normalmente</span>
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contato de Segurança */}
          <section>
            <Card className="bg-gradient-hero border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Contato de Segurança</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Para questões relacionadas à segurança, entre em contato com nossa equipe especializada:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-foreground">Email:</strong> 
                    <span className="text-primary ml-2">contato@bldrapp.com.br</span>
                  </p>
                  <p>
                    <strong className="text-foreground">Telefone de Emergência:</strong> 
                    <span className="text-primary ml-2">+55 (31) 2391-4743</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Security;
