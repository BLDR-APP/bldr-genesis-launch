import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Termos de <span className="text-primary">Uso</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Ao acessar e usar o aplicativo BLDR ("Aplicativo"), você concorda em cumprir e estar 
                vinculado aos termos e condições de uso descritos neste documento ("Termos de Uso").
              </p>
              <p className="mb-4">
                Se você não concordar com qualquer parte destes termos, não deve usar nosso aplicativo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
              <p className="mb-4">
                O BLDR é uma plataforma digital que oferece:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Treinos personalizados baseados em inteligência artificial</li>
                <li>Acompanhamento de progresso e métricas de desempenho</li>
                <li>Comunidade fitness para interação entre usuários</li>
                <li>Conteúdo educacional sobre fitness e nutrição</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro e Conta do Usuário</h2>
              <p className="mb-4">
                Para usar certas funcionalidades do aplicativo, você deve criar uma conta fornecendo 
                informações precisas e completas.
              </p>
              <p className="mb-4">
                Você é responsável por:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Uso Aceitável</h2>
              <p className="mb-4">Você concorda em não usar o aplicativo para:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Violar qualquer lei ou regulamento aplicável</li>
                <li>Transmitir conteúdo ofensivo, difamatório ou inadequado</li>
                <li>Interferir no funcionamento do aplicativo</li>
                <li>Tentar acessar contas de outros usuários</li>
                <li>Usar o serviço para fins comerciais não autorizados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Responsabilidades e Limitações</h2>
              <p className="mb-4">
                <strong className="text-foreground">Aviso Médico:</strong> O BLDR fornece informações 
                e treinos para fins educacionais e de fitness. Antes de iniciar qualquer programa de 
                exercícios, consulte um médico ou profissional de saúde qualificado.
              </p>
              <p className="mb-4">
                Você assume todos os riscos relacionados ao uso do aplicativo e aos exercícios realizados. 
                O BLDR não se responsabiliza por lesões ou problemas de saúde decorrentes do uso do aplicativo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p className="mb-4">
                Todo o conteúdo do aplicativo, incluindo textos, gráficos, logotipos, ícones, imagens, 
                clipes de áudio, downloads digitais e compilações de dados, é propriedade do BLDR ou 
                de seus fornecedores de conteúdo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificações dos Termos</h2>
              <p className="mb-4">
                Reservamos o direito de modificar estes termos a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no aplicativo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <p className="mb-4">
                Email: <span className="text-primary">contato@bldr.app</span><br />
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

export default Terms;
