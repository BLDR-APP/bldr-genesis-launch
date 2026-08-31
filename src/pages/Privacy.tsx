import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Mail, Server, Trash2 } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFD700] selection:text-black">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Política de <span className="text-[#FFD700]">Privacidade</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-zinc-500 bg-zinc-900/50 w-fit mx-auto px-4 py-1 rounded-full border border-zinc-800">
            <Shield className="h-4 w-4" />
            <span className="text-sm">Última atualização: 31/08/2026</span>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">

          {/* 1. Compromisso */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">1.</span> Compromisso com a Privacidade
            </h2>
            <p>
              No aplicativo <strong>BLDR</strong>, respeitamos a sua privacidade e estamos integralmente comprometidos em proteger seus dados pessoais. Esta Política de Privacidade descreve de forma clara e transparente como coletamos, utilizamos, armazenamos e protegemos as suas informações ao utilizar o aplicativo <strong>BLDR</strong> e nossos serviços associados.
            </p>
          </section>

          {/* 2. Informações que Coletamos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#FFD700]">2.</span> Informações que Coletamos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#FFD700]" /> Informações de Cadastro
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-400 marker:text-[#FFD700]">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Data de nascimento</li>
                  <li>Informações físicas e metas (altura, peso, nível e objetivos de treino)</li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-[#FFD700]" /> Dados de Uso e Saúde/Fitness
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-400 marker:text-[#FFD700]">
                  <li>Histórico de treinos, exercícios e cargas</li>
                  <li>Progresso, métricas de desempenho e registros nutricionais/hídricos</li>
                  <li>Preferências e configurações de conta</li>
                  <li>Tempo de uso e interações no app</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-white font-bold mb-2">Dados Técnicos e do Dispositivo:</h3>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
                <li>Informações do dispositivo (modelo de hardware, versão do sistema operacional)</li>
                <li>Identificadores exclusivos de dispositivo e endereço IP</li>
                <li>Dados de falhas (crash logs) e métricas de desempenho do sistema</li>
              </ul>
            </div>
          </section>

          {/* 3. Como Usamos */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">3.</span> Como Usamos suas Informações
            </h2>
            <p className="mb-4">Utilizamos os dados coletados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
              <li>Personalizar treinos, rotinas e planos de evolução</li>
              <li>Acompanhar o progresso físico e gerar relatórios de desempenho</li>
              <li>Processar autenticações e gerenciar o acesso seguro à sua conta</li>
              <li>Melhorar a performance, estabilidade e recursos do aplicativo</li>
              <li>Enviar notificações operacionais e lembretes de treinos (quando autorizados)</li>
              <li>Prestar suporte ao cliente e cumprir exigências legais vigentes</li>
            </ul>
          </section>

          {/* 4. Compartilhamento */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">4.</span> Compartilhamento de Dados com Terceiros
            </h2>
            <p className="mb-4 text-white font-medium">Não comercializamos nem vendemos seus dados pessoais a terceiros.</p>
            <p className="mb-4">O compartilhamento ocorre estritamente com provedores de infraestrutura e serviços essenciais para o funcionamento do app, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
              <li><strong>Infraestrutura e Banco de Dados em Nuvem:</strong> Para armazenamento seguro e processamento de contas e treinos.</li>
              <li><strong>Serviços de Autenticação e Notificação:</strong> Para envio de alertas, recuperação de senha e push notifications.</li>
              <li><strong>Processadores de Pagamento e Assinaturas:</strong> Para validação de compras integradas (In-App Purchases) e assinaturas digitais via Google Play e lojas oficiais.</li>
              <li><strong>Cumprimento Legal:</strong> Quando exigido por ordem judicial ou autoridades competentes.</li>
            </ul>
          </section>

          {/* 5. Segurança */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">5.</span> Segurança dos Dados
            </h2>
            <p className="mb-4">Adotamos padrões rígidos da indústria para manter suas informações protegidas:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                <Lock className="h-4 w-4 text-[#FFD700]" /> Criptografia em trânsito (HTTPS/TLS) e repouso
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                <Shield className="h-4 w-4 text-[#FFD700]" /> Controle de acesso restrito e autenticado
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                <Eye className="h-4 w-4 text-[#FFD700]" /> Monitoramento contínuo contra acessos não autorizados
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 px-4 py-3 rounded-lg">
                <Server className="h-4 w-4 text-[#FFD700]" /> Backups e servidores de alta disponibilidade
              </div>
            </div>
          </section>

          {/* 6. LGPD */}
          <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#FFD700]">6.</span> Seus Direitos (LGPD)
            </h2>
            <p className="mb-4">Em conformidade com a LGPD, você possui direito total a:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 list-disc pl-5 text-zinc-400 marker:text-[#FFD700]">
              <li>Acessar e visualizar todos os seus dados cadastrados</li>
              <li>Corrigir informações incompletas, inexatas ou desatualizadas</li>
              <li>Solicitar a exclusão definitiva e revogação de consentimentos</li>
              <li>Exportar ou solicitar a portabilidade dos seus registros</li>
              <li>Obter informações sobre as entidades públicas e privadas com as quais compartilhamos dados</li>
            </ul>
          </section>

          {/* 7. Retenção e Exclusão de Dados */}
          <section className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-[#FFD700]" /> 7. Retenção e Exclusão de Conta/Dados (Google Play Policy)
            </h3>
            <p className="text-zinc-300 mb-3">
              Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou exigências fiscais e regulatórias.
            </p>
            <p className="text-zinc-300 mb-4">
              Você pode solicitar a <strong>exclusão completa da sua conta e de todos os dados associados</strong> a qualquer momento de duas maneiras:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-[#FFD700]">
              <li><strong>Diretamente no aplicativo:</strong> Acesse seu <em>Perfil &gt; Configurações &gt; Excluir Conta</em>. A exclusão dos dados de perfil e treinos é processada imediatamente.</li>
              <li><strong>Por solicitação via e-mail:</strong> Envie um e-mail para <span className="text-white font-medium">contato@bldrapp.com.br</span> com o assunto <em>&quot;Exclusão de Conta BLDR&quot;</em> utilizando seu e-mail cadastrado. Os dados serão excluídos definitivamente em até 7 dias úteis.</li>
            </ul>
          </section>

          {/* 8, 9 - Cookies e Alterações */}
          <section className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">8. Cookies e Tecnologias Locais</h3>
              <p>Utilizamos tokens de sessão e tecnologias locais de armazenamento no app para manter seu login autenticado e salvar preferências de interface no dispositivo.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">9. Alterações nesta Política</h3>
              <p>Podemos atualizar esta política periodicamente. Notificaremos você sobre qualquer alteração substancial atualizando a data no topo desta página e por meio de comunicados no app.</p>
            </div>
          </section>

          {/* 10. Contato (DPO) */}
          <section className="border-t border-zinc-800 pt-12 mt-12">
            <h2 className="text-2xl font-bold text-white mb-8">10. Contato e Encarregado de Dados (DPO)</h2>
            <p className="mb-6 text-zinc-400">Para exercer qualquer um dos seus direitos de privacidade ou esclarecer dúvidas, entre em contato:</p>
            
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col sm:flex-row items-center gap-6 hover:border-[#FFD700]/30 transition-colors">
              <div className="bg-[#FFD700]/10 p-4 rounded-full">
                <Mail className="h-8 w-8 text-[#FFD700]" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs text-[#FFD700] uppercase font-bold tracking-wider mb-1">Encarregado de Dados (DPO)</p>
                <p className="text-white font-medium text-lg">contato@bldrapp.com.br</p>
                <p className="text-zinc-500 mt-1">Atendimento em até 48 horas úteis.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
