export const Holding = () => {
  return (
    <section
      id="holding"
      className="relative pt-30 pb-32 px-6 min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-space pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Conteúdo */}
        <div>
          <span className="inline-block py-1 px-4 rounded-full glass-card text-[#00ABE4] text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[#00ABE4]/30">
            Ecossistema Independente de Tecnologia
          </span>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter mb-8">
            Salto Tecnológico. <br />
            <span className="bg-clip-text bg-bahia-gradient">
              Raízes Baianas.
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-lg leading-relaxed mb-10">
            Desenvolvemos plataformas de alto impacto para conectar estudantes,
            cultura e economia local no Oeste Baiano através de arquiteturas
            serverless inovadoras.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#ecossistema"
              className="bg-blue-gradient text-[#050B14] font-black px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-[#00ABE4]/30"
            >
              Ver Portfólio de Projetos
            </a>
          </div>
        </div>

        {/* Astronauta */}
        <div className="relative flex justify-center items-center min-h-[700px]">
          {/* Glow */}
          <div className="absolute w-[650px] h-[650px] bg-[#00ABE4]/20 rounded-full blur-[150px]"></div>

          <img
            src="/imagens/astronauta-baiano.png"
            alt="Astronauta Jumpiemoon"
            className="
          relative
          z-10
          w-[450px]
          md:w-[600px]
          xl:w-[750px]
          h-auto
          object-contain
          translate-y-70
          animate-astronaut
          drop-shadow-[0_0_60px_rgba(0,171,228,0.6)]
        "
          />
        </div>
      </div>
    </section>
  );
};
