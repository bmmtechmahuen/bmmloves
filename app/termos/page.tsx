import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Termos de Uso — BMM Love" };

export default function TermosPage() {
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
          <Image src="/logo.png" alt="BMM Love" width={56} height={56} className="rounded-md" />
        </div>

        <h1 className="text-3xl font-black mb-2">Termos de Uso</h1>
        <p className="text-white/40 text-sm mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Aceitação dos Termos</h2>
            <p>Ao utilizar o BMM Love, você concorda com estes Termos de Uso. Caso não concorde, não utilize nossos serviços. O BMM Love é uma plataforma que permite a criação de páginas digitais personalizadas como presente romântico.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Serviços Oferecidos</h2>
            <p>O BMM Love oferece a criação de páginas digitais personalizadas com fotos, músicas, mensagens e mini-games, acessíveis via link exclusivo. Os planos disponíveis são:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/50">
              <li><strong className="text-white/70">7 Dias</strong> — acesso à página por 7 dias corridos a partir da criação</li>
              <li><strong className="text-white/70">Vitalício</strong> — acesso permanente à página sem prazo de expiração</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Pagamento</h2>
            <p>Os pagamentos são processados de forma segura pelo Mercado Pago. São aceitos cartão de crédito, débito e PIX. O pagamento é único, sem cobranças recorrentes ou mensalidades. Após a confirmação do pagamento, a página é disponibilizada imediatamente.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Reembolso</h2>
            <p>Por se tratar de um produto digital entregue imediatamente após o pagamento, não oferecemos reembolso após a criação da página. Em caso de problemas técnicos que impeçam o acesso à página, entre em contato conosco para resolução.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Conteúdo do Usuário</h2>
            <p>Você é responsável pelo conteúdo que insere na plataforma (fotos, textos, músicas). É proibido inserir conteúdo que:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-white/50">
              <li>Viole direitos autorais de terceiros</li>
              <li>Contenha material ilegal, ofensivo ou pornográfico</li>
              <li>Infrinja a privacidade de outras pessoas sem consentimento</li>
            </ul>
            <p className="mt-3">O BMM Love reserva-se o direito de remover páginas que violem estas diretrizes.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">6. Disponibilidade</h2>
            <p>Não garantimos disponibilidade ininterrupta do serviço. Realizamos manutenções periódicas e podemos suspender temporariamente o acesso para melhorias. Páginas do plano 7 dias são removidas automaticamente após o vencimento do prazo.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">7. Limitação de Responsabilidade</h2>
            <p>O BMM Love não se responsabiliza por danos indiretos decorrentes do uso ou impossibilidade de uso do serviço. Nossa responsabilidade máxima limita-se ao valor pago pelo serviço.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">8. Alterações nos Termos</h2>
            <p>Podemos atualizar estes termos a qualquer momento. As alterações entram em vigor assim que publicadas. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">9. Contato</h2>
            <p>Para dúvidas sobre estes termos, entre em contato pelo WhatsApp <a href="https://api.whatsapp.com/send?phone=5521981012299" className="text-[#E8185A] hover:underline" target="_blank" rel="noopener noreferrer">(21) 98101-2299</a> ou acesse nossa <Link href="/contato" className="text-[#E8185A] hover:underline">página de contato</Link>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex gap-6 text-xs text-white/30">
          <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
        </div>
      </div>
    </div>
  );
}
