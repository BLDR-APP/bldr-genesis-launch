import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Última atualização: Janeiro de 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Resumo da Política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    No BLDR, levamos sua privacidade a sério. Esta política explica como coletamos, 
                    usamos e protegemos suas informações pessoais quando você usa nosso aplicativo.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Informações fornecidas por você:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Nome, email e informações de perfil</li>
                      <li>Dados físicos (altura, peso, objetivos fitness)</li>
                      <li>Preferências de treino e configurações do app</li>
                      <li>Feedback e comunicações conosco</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-foreground mt-6">Informações coletadas automaticamente:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Dados de uso do aplicativo e estatísticas de treino</li>
                      <li>Informações do dispositivo e dados técnicos</li>
                      <li>Localização aproximada (com sua permissão)</li>
                      <li>Dados de sensores de fitness (com sua permissão)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Como Usamos suas Informações</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Personalizar treinos e recomendações</li>
                      <li>Acompanhar seu progresso e fornecer insights</li>
                      <li>Melhorar nossos serviços e desenvolver novos recursos</li>
                      <li>Enviar notificações importantes sobre o serviço</li>
                      <li>Fornecer suporte ao cliente</li>
                      <li>Garantir a segurança e integridade da plataforma</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Informações</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>Não vendemos suas informações pessoais. Podemos compartilhar dados apenas nos seguintes casos:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Com prestadores de serviços que nos ajudam a operar o app</li>
                      <li>Quando exigido por lei ou processo legal</li>
                      <li>Para proteger nossos direitos, propriedade ou segurança</li>
                      <li>Com seu consentimento explícito</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Segurança dos Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
                    informações contra acesso não autorizado, alteração, divulgação ou destruição. 
                    Isso inclui criptografia de dados, controles de acesso e monitoramento regular 
                    de nossos sistemas.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="mb-3">Você tem o direito de:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Acessar e atualizar suas informações pessoais</li>
                      <li>Solicitar a exclusão de seus dados</li>
                      <li>Restringir o processamento de suas informações</li>
                      <li>Portabilidade de dados</li>
                      <li>Retirar o consentimento a qualquer momento</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Retenção de Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                    propósitos descritos nesta política, exceto quando um período de retenção mais 
                    longo for exigido ou permitido por lei.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies e Tecnologias Similares</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Usamos cookies e tecnologias similares para melhorar sua experiência, analisar 
                    o uso do app e fornecer conteúdo personalizado. Você pode controlar o uso de 
                    cookies através das configurações do seu dispositivo.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Alterações nesta Política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
                    significativas através do app ou por email. Recomendamos que você revise esta 
                    política regularmente.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para questões sobre privacidade ou para exercer seus direitos, entre em contato:
                    <br />
                    <a href="mailto:privacidade@bldr.app" className="text-primary hover:underline">
                      privacidade@bldr.app
                    </a>
                    <br />
                    Ou através de nossas configurações de privacidade no aplicativo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidade;