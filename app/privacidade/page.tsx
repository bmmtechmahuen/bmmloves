import Link from "next/link";

export const metadata = { title: "Privacidade — BMM Love" };

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="max-w-2xl mx-auto px-5 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </Link>

        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-8 h-8 bg-[#E8185A] rounded-md flex items-center justify-center font-black text-white text-xs">BL</div>
          <span className="font-bold text-lg"><span className="text-[#E8185A]">BMM</span> Love</span>
        </div>

        <h1 className="text-3xl font-black mb-2">Política de Privacidade</h1>
        <p className="text-white/40 text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Informações que Coletamos</h2>
            <p>Para fornecer o serviço, coletamos as seguintes informações:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/50">
              <li><strong className="text-white/70">E-mail</strong> — para envio do link da página criada</li>
              <li><strong className="text-white/70">Conteúdo da página</strong> — nomes, datas, fotos, músicas e textos que você insere</li>
              <li><strong className="text-white/70">Dados de pagamento</strong> — processados diretamente pelo Mercado Pago; não armazenamos dados de cartão</li>
              <li><strong className="text-white/70">Dados de acesso</strong> — IP e logs de acesso para segurança e diagnóstico</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações exclusivamente para:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/50">
              <li>Criar e entregar a página personalizada</li>
              <li>Enviar o link da página por e-mail</li>
              <li>Processar o pagamento com segurança</li>
              <li>Suporte técnico quando solicitado</li>
            </ul>
            <p className="mt-3">Não utilizamos seus dados para marketing sem consentimento e não vendemos suas informações a terceiros.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Compartilhamento de Dados</h2>
            <p>Seus dados são compartilhados apenas com os parceiros necessários para a prestação do serviço:</p>
            <ul className="mt-3 space-y-2 text-white/50">
              <li><strong className="text-white/70">Mercado Pago</strong> — processamento de pagamentos</li>
              <li><strong className="text-white/70">Resend</strong> — envio de e-mails transacionais</li>
            </ul>
            <p className="mt-3">Esses parceiros possuem suas próprias políticas de privacidade e são responsáveis pelo tratamento dos dados em suas plataformas.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Armazenamento e Segurança</h2>
            <p>Seus dados são armazenados em servidores seguros com criptografia em trânsito (HTTPS/TLS 1.3). Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Retenção de Dados</h2>
            <p>Os dados da sua página são mantidos enquanto o plano estiver ativo:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/50">
              <li><strong className="text-white/70">Plano 7 Dias</strong> — os dados são removidos após o vencimento do prazo</li>
              <li><strong className="text-white/70">Plano Vitalício</strong> — os dados são mantidos indefinidamente enquanto o serviço existir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">6. Seus Direitos (LGPD)</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/50">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que possuímos sobre você</li>
              <li>Solicitar a correção de dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento para tratamento dos dados</li>
            </ul>
            <p className="mt-3">Para exercer esses direitos, entre em contato pelo WhatsApp <a href="https://api.whatsapp.com/send?phone=5521981012299" className="text-[#E8185A] hover:underline" target="_blank" rel="noopener noreferrer">(21) 98101-2299</a>.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">7. Cookies</h2>
            <p>Utilizamos apenas cookies essenciais para o funcionamento da autenticação e sessão. Não utilizamos cookies de rastreamento ou publicidade.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">8. Alterações nesta Política</h2>
            <p>Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas por e-mail ou mediante aviso em destaque na plataforma.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6 text-xs text-white/30">
          <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
        </div>
      </div>
    </div>
  );
}
