import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-primary">Privacidade</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Compromisso com a Privacidade</h2>
              <p className="mb-4">
                No BLDR, respeitamos sua privacidade e estamos comprometidos em proteger seus dados 
                pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos 
                e protegemos suas informações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Informações de Cadastro:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Data de nascimento</li>
                <li>Informações físicas (altura, peso, objetivos)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Dados de Uso:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Histórico de treinos e exercícios</li>
                <li>Progresso e métricas de desempenho</li>
                <li>Preferências e configurações do app</li>
                <li>Tempo de uso e navegação</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Dados Técnicos:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Informações do dispositivo</li>
                <li>Endereço IP</li>
                <li>Dados de localização (se autorizado)</li>
                <li>Logs de sistema</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos suas Informações</h2>
              <p className="mb-4">Utilizamos seus dados para:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personalizar treinos e recomendações</li>
                <li>Acompanhar seu progresso e fornecer insights</li>
                <li>Melhorar nossos serviços e funcionalidades</li>
                <li>Enviar notificações relevantes (se autorizado)</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Garantir a segurança da plataforma</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
              <p className="mb-4">
                <strong className="text-foreground">Não vendemos seus dados pessoais.</strong> 
                Compartilhamos informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com provedores de serviços confiáveis (sob acordos rígidos)</li>
                <li>Em caso de fusão ou aquisição da empresa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Segurança dos Dados</h2>
              <p className="mb-4">Implementamos medidas de segurança robustas:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controle de acesso restrito</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Auditorias regulares de segurança</li>
                <li>Conformidade com padrões internacionais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="mb-4">Você tem o direito de:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimentos a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Ser informado sobre o uso de seus dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Retenção de Dados</h2>
              <p className="mb-4">
                Mantemos seus dados pelo tempo necessário para fornecer nossos serviços ou 
                conforme exigido por lei. Você pode solicitar a exclusão de sua conta a 
                qualquer momento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies e Tecnologias Similares</h2>
              <p className="mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                analisar o uso do aplicativo e personalizar conteúdo. Você pode gerenciar 
                suas preferências de cookies nas configurações do app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações na Política</h2>
              <p className="mb-4">
                Podemos atualizar esta política periodicamente. Notificaremos você sobre 
                mudanças significativas através do aplicativo ou por email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
              <p className="mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
              </p>
              <p className="mb-4">
                <strong className="text-foreground">Encarregado de Dados:</strong><br />
                Email: <span className="text-primary">privacidade@bldr.app</span><br />
                Telefone: <span className="text-primary">+55 (11) 9999-9999</span>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
