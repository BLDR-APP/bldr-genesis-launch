import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Termos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
              Termos de Uso
            </h1>
            <p className="text-xl text-background/90 max-w-2xl mx-auto">
              Última atualização: Janeiro de 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar e usar o aplicativo BLDR, você concorda em cumprir e ficar vinculado a estes 
                    Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O BLDR é um aplicativo de fitness que oferece treinos personalizados, acompanhamento de progresso 
                    e recursos de comunidade. Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer 
                    momento, com ou sem aviso prévio.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Cadastro e Conta do Usuário</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>Para usar certas funcionalidades do app, você deve:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fornecer informações precisas e atualizadas durante o cadastro</li>
                      <li>Manter a segurança de sua senha e conta</li>
                      <li>Notificar-nos imediatamente sobre uso não autorizado de sua conta</li>
                      <li>Ser responsável por todas as atividades que ocorrem em sua conta</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Uso Aceitável</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>Você concorda em não usar o serviço para:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Violar qualquer lei local, estadual, nacional ou internacional</li>
                      <li>Transmitir material prejudicial, ofensivo ou inadequado</li>
                      <li>Interferir ou interromper o serviço ou servidores conectados ao serviço</li>
                      <li>Usar o serviço para fins comerciais não autorizados</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Assinaturas e Pagamentos</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>
                      As assinaturas são renovadas automaticamente. Você pode cancelar a qualquer momento através 
                      das configurações de sua conta. O cancelamento entrará em vigor no final do período de 
                      faturamento atual.
                    </p>
                    <p>
                      Não oferecemos reembolsos para períodos de assinatura parcialmente utilizados, exceto 
                      quando exigido por lei.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Propriedade Intelectual</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O BLDR e todo o seu conteúdo, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio 
                    e software, são propriedade do BLDR ou de seus fornecedores de conteúdo e são protegidos por 
                    leis de direitos autorais e outras leis de propriedade intelectual.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Limitação de Responsabilidade</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O BLDR não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou 
                    consequenciais resultantes do uso ou incapacidade de usar o serviço, mesmo que tenhamos sido 
                    avisados da possibilidade de tais danos.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Modificações dos Termos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As modificações 
                    entrarão em vigor imediatamente após a publicação no aplicativo. Seu uso continuado do serviço 
                    após tais modificações constitui sua aceitação dos novos termos.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em: 
                    <a href="mailto:legal@bldr.app" className="text-primary hover:underline ml-1">
                      legal@bldr.app
                    </a>
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

export default Termos;