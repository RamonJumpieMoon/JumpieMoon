export const Fundadores = () => {
  return (
    <div id="lideranca" className="py-32 px-6 relative z-10 bg-[#050B14]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="">
            <h2 className="text-5xl font-black mb-8 leading-tight text-white">
              Liderança <br />
              <span className="text-[#00ABE4]">Estratégica.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-12">
              A Jumpiemoon é movida por uma visão compartilhada entre tecnologia
              de ponta e excelência operacional, focada no desenvolvimento
              socioeconômico da nossa região.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 glass-card border-[#00ABE4]/30 hover:border-[#00ABE4] transition">
                <img
                  src="/imagens/perfis/gabriel_vogais.jpeg"
                  alt="Gabriel Vogais"
                  className="w-20 h-20 rounded-2xl object-cover border border-[#00ABE4]/30 shrink-0"
                />

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    Ramon Luis Almeida dos Santos
                  </h4>
                  <p className="text-[#00ABE4] font-bold text-xs uppercase tracking-widest">
                    CEO e Co-fundador
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Full Stack Developer | Estrategista de Produto
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 glass-card border-white/10 hover:border-white/30 transition">
                <img
                  src="/imagens/perfis/gabriel_vogais.jpeg"
                  alt="Gabriel Vogais"
                  className="w-20 h-20 rounded-2xl object-cover border border-[#00ABE4]/30 shrink-0"
                />

                <div>
                  <h4 className="text-2xl font-bold text-white">
                    Rayane Bittencourt
                  </h4>
                  <p className="text-[#E9F1FA] font-bold text-xs uppercase tracking-widest">
                    Co-fundadora
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Gestão de Projetos | Operações Estratégicas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-12 bg-gradient-to-br from-[#00ABE4]/10 to-transparent border-[#00ABE4]/30 fade-up">
            <i
              data-lucide="quote"
              className="w-12 h-12 text-[#00ABE4]/50 mb-8"
            ></i>
            <h3 className="text-3xl font-light mb-6 italic leading-relaxed text-white">
              "Nascemos para provar que o interior do Brasil pode produzir
              tecnologia de classNamee mundial, resolvendo problemas reais com
              dignidade e inteligência."
            </h3>
            <p className="text-[#00ABE4] font-bold uppercase text-sm tracking-widest">
              — Manifesto Jumpiemoon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
