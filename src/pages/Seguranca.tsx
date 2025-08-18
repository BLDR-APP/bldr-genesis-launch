import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const Seguranca = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Criptografia End-to-End',
      description: 'Todos os seus dados são criptografados usando os mais altos padrões de segurança da indústria.'
    },
    {
      icon: Lock,
      title: 'Autenticação Segura',
      description: 'Suporte para autenticação de dois fatores (2FA) e biometria para proteger sua conta.'
    },
    {
      icon: Eye,
      title: 'Privacidade por Design',
      description: 'Construímos nossos sistemas pensando na privacidade desde o primeiro dia.'
    },
    {
      icon: UserCheck,
      title: 'Controle de Dados',
      description: 'Você tem controle total sobre seus dados e pode excluí-los a qualquer momento.'
    }
  ];

  const securityTips = [
    'Use uma senha forte e única para sua conta BLDR',
    'Ative a autenticação de dois fatores (2FA)',
    'Mantenha o aplicativo sempre atualizado',
    'Não compartilhe suas credenciais com terceiros',
    'Verifique regularmente a atividade da sua conta',
    'Use conexões seguras (Wi-Fi protegido) sempre que possível'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
              Segurança e Proteção
            </h1>
            <p className="text-xl text-background/90 max-w-3xl mx-auto">
              Sua segurança é nossa prioridade. Conheça as medidas que implementamos 
              para proteger seus dados e sua privacidade.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Recursos de Segurança</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Implementamos múltiplas camadas de proteção para manter seus dados seguros
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon size={32} className="text-background" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Standards */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Padrões de Segurança</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Certificações e Conformidade</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>ISO 27001 (Gestão de Segurança da Informação)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>LGPD (Lei Geral de Proteção de Dados)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>GDPR (Regulamento Geral de Proteção de Dados)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>SOC 2 Type II</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tecnologias de Proteção</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>Criptografia AES-256</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>TLS 1.3 para transmissão de dados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>Hashing seguro de senhas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-primary" />
                      <span>Monitoramento 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Tips */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dicas de Segurança</h2>
              
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <AlertTriangle size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Proteja sua conta</h3>
                      <p className="text-muted-foreground">
                        Siga estas práticas recomendadas para manter sua conta BLDR segura:
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {securityTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Resposta a Incidentes</h2>
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Detecção e Resposta</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mantemos um sistema de monitoramento 24/7 que detecta automaticamente atividades 
                    suspeitas. Nossa equipe de segurança responde imediatamente a qualquer ameaça 
                    potencial, seguindo protocolos rigorosos de resposta a incidentes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Comunicação Transparente</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No caso improvável de um incidente de segurança, comprometemo-nos a comunicar 
                    de forma transparente e oportuna com nossos usuários, seguindo todas as 
                    regulamentações aplicáveis.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Melhoria Contínua</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Realizamos auditorias regulares de segurança e testes de penetração para 
                    identificar e corrigir vulnerabilidades antes que possam ser exploradas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Relatar Problema de Segurança</h2>
              <p className="text-muted-foreground mb-8">
                Se você descobrir uma vulnerabilidade de segurança, por favor nos informe 
                imediatamente. Levamos todos os relatórios a sério e investigamos rapidamente.
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Email de Segurança:</strong>{' '}
                  <a href="mailto:security@bldr.app" className="text-primary hover:underline">
                    security@bldr.app
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  Para relatórios sensíveis, use nossa chave PGP disponível em nosso site.
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

export default Seguranca;