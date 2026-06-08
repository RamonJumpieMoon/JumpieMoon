export const Impacto = () => {
  const indicadores = [
    {
      numero: "+10",
      titulo: "Projetos em Desenvolvimento",
      descricao:
        "Soluções digitais voltadas para educação, cultura e negócios.",
    },
    {
      numero: "+5 mil",
      titulo: "Usuários Impactados",
      descricao: "Pessoas conectadas através das plataformas do ecossistema.",
    },
    {
      numero: "100%",
      titulo: "Tecnologia Própria",
      descricao: "Desenvolvimento interno utilizando arquiteturas modernas.",
    },
    {
      numero: "BA",
      titulo: "Origem Regional",
      descricao: "Tecnologia criada no Oeste Baiano para o Brasil.",
    },
  ];

  return (
    <section id="impacto" className="relative py-32 px-6 bg-[#050B14]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full glass-card text-[#00ABE4] text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[#00ABE4]/30">
            Impacto
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Construindo um
            <span className="text-[#00ABE4]"> Ecossistema </span>
            de Inovação
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Cada projeto desenvolvido pela Jumpiemoon busca gerar valor real
            para estudantes, empresas, instituições e comunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {indicadores.map((item) => (
            <div
              key={item.titulo}
              className="glass-card p-8 text-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl font-black text-[#00ABE4] mb-4">
                {item.numero}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.titulo}
              </h3>

              <p className="text-slate-400">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
