import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Mail, Phone, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Termos de <span className="text-[#FFD700]">Uso</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-zinc-500 bg-zinc-900/50 w-fit mx-auto px-4 py-1 rounded-full border border-zinc-800">
            <FileText className="h-4 w-4" />
            <span className="text-sm">Última atualização: 29/11/2025</span>
          </div>
        </div>

        {/* CONTEÚDO LEGAL */}
        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">

          {/* Seção 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">1.</span> Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar o aplicativo BLDR ("Aplicativo"), você concorda em cumprir e estar vinculado aos termos e condições de uso descritos neste documento ("Termos de Uso").
            </p>
            <p className="mt-4">
              Se você não concordar com qualquer parte destes termos, não deve usar nosso aplicativo.
            </p>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">2.</span> Descrição do Serviço
            </h2>
            <p className="mb-4">O BLDR é uma plataforma digital que oferece:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
              <li>Treinos personalizados baseados em inteligência artificial</li>
              <li>Acompanhamento de progresso e métricas de desempenho</li>
              <li>Comunidade fitness para interação entre usuários</li>
              <li>Conteúdo educacional sobre fitness e nutrição</li>
            </ul>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">3.</span> Cadastro e Conta do Usuário
            </h2>
            <p className="mb-4">Para usar certas funcionalidades do aplicativo, você deve criar uma conta fornecendo informações precisas e completas.</p>
            <p className="mb-2">Você é responsável por:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
              <li>Manter a confidencialidade de sua senha</li>
              <li>Todas as atividades que ocorrem em sua conta</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">4.</span> Uso Aceitável
            </h2>
            <p className="mb-4">Você concorda em não usar o aplicativo para:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
              <li>Violar qualquer lei ou regulamento aplicável</li>
              <li>Transmitir conteúdo ofensivo, difamatório ou inadequado</li>
              <li>Interferir no funcionamento do aplicativo</li>
              <li>Tentar acessar contas de outros usuários</li>
              <li>Usar o serviço para fins comerciais não autorizados</li>
            </ul>
          </section>

           {/* Seção 5 - DESTAQUE ESPECIAL (AVISO MÉDICO) */}
          <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle className="w-32 h-32 text-[#FFD700]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                <span className="text-[#FFD700]">5.</span> Responsabilidades e Limitações
            </h2>
            <div className="relative z-10">
                <p className="mb-4">
                  <strong className="text-[#FFD700]">Aviso Médico:</strong> O BLDR fornece informações e treinos para fins educacionais e de fitness. Antes de iniciar qualquer programa de exercícios, consulte um médico ou profissional de saúde qualificado.
                </p>
                <p>
                  Você assume todos os riscos relacionados ao uso do aplicativo e aos exercícios realizados. O BLDR não se responsabiliza por lesões ou problemas de saúde decorrentes do uso do aplicativo.
                </p>
            </div>
          </section>

          {/* Seção 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">6.</span> Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo do aplicativo, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade do BLDR ou de seus fornecedores de conteúdo.
            </p>
          </section>

           {/* Seção 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FFD700]">7.</span> Modificações dos Termos
            </h2>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no aplicativo.
            </p>
          </section>

          {/* Seção 8 - CONTATO */}
          <section className="border-t border-zinc-800 pt-12 mt-12">
            <h2 className="text-2xl font-bold text-white mb-8">8. Contato</h2>
            <p className="mb-8">Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition-colors">
                    <div className="bg-[#FFD700]/10 p-3 rounded-full">
                        <Mail className="text-[#FFD700] h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Email</p>
                        <p className="text-white font-medium">contato@bldrapp.com.br</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4 bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition-colors">
                    <div className="bg-[#FFD700]/10 p-3 rounded-full">
                        <Phone className="text-[#FFD700] h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Telefone</p>
                        <p className="text-white font-medium">+55 (31) 2391-4743</p>
                    </div>
                </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Terms;
