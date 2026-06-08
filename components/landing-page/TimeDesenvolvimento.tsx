"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TimeDesenvolvimento = () => {
  const equipe = [
    {
      nome: "Ramon Luis",
      cargo: "CEO & Full Stack Developer",
      foto: "/imagens/equipe/ramon.jpg",
      especialidades: ["Next.js", "Node.js", "Arquitetura", "Produto"],
      descricao:
        "Lidera a estratégia tecnológica da Jumpiemoon e o desenvolvimento de produtos digitais escaláveis.",
    },
    {
      nome: "Rayane Bittencourt",
      cargo: "Co-Founder",
      foto: "/imagens/perfis/rayane.jpg",
      especialidades: ["Operações", "Projetos", "Gestão"],
      descricao:
        "Responsável pela gestão estratégica, organização operacional e acompanhamento dos projetos.",
    },
    {
      nome: "Gabriel Vogais",
      cargo: "Software Developer",
      foto: "/imagens/perfis/gabriel_vogais.jpeg",
      especialidades: ["React", "VBA", "Power BI"],
      descricao:
        "Especialista em automação de processos, sistemas web, análise de dados e soluções corporativas.",
    },
    {
      nome: "Gabriel Chará",
      cargo: "Software Developer",
      foto: "/imagens/perfis/gabriel_vogais.jpeg",
      especialidades: ["React", "VBA", "Power BI"],
      descricao:
        "Especialista em automação de processos, sistemas web, análise de dados e soluções corporativas.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % equipe.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [equipe.length]);

  const membrosVisiveis = [
    equipe[(currentIndex - 1 + equipe.length) % equipe.length],
    equipe[currentIndex],
    equipe[(currentIndex + 1) % equipe.length],
  ];

  const getCardStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          x: -380,
          scale: 0.88,
          opacity: 0.65,
          rotateY: 12,
          zIndex: 10,
        };

      case 1:
        return {
          x: 0,
          scale: 1,
          opacity: 1,
          rotateY: 0,
          zIndex: 30,
        };

      case 2:
        return {
          x: 380,
          scale: 0.88,
          opacity: 0.65,
          rotateY: -12,
          zIndex: 10,
        };

      default:
        return {};
    }
  };

  return (
    <section
      id="time"
      className="relative py-30 px-6 bg-[#050B14] overflow-hidden"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-space pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ABE4]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full border border-[#00ABE4]/30 bg-[#0B1626] text-[#00ABE4] text-xs font-black uppercase tracking-[0.2em] mb-6">
            Nosso Time
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Pessoas que transformam
            <span className="text-[#00ABE4]"> ideias em tecnologia</span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Conheça os profissionais responsáveis por construir e desenvolver
            soluções que impulsionam o ecossistema Jumpiemoon.
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="relative h-[320px] flex items-center justify-center"
          style={{
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          {membrosVisiveis.map((membro, index) => {
            const destaque = index === 1;

            return (
              <motion.div
                key={membro.nome}
                animate={getCardStyle(index)}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  w-[380px]
                  rounded-[2.5rem]
                  overflow-hidden
                  border
                  group
                  bg-gradient-to-b
                  from-[#0F1C2E]
                  to-[#08111D]
                  ${
                    destaque
                      ? "border-[#00ABE4]/30 shadow-[0_0_60px_rgba(0,171,228,0.18)]"
                      : "border-white/5"
                  }
                `}
              >
                {/* FOTO */}
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111D] via-[#08111D]/30 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-3xl font-black leading-tight">
                      {membro.nome}
                    </h3>

                    <p className="text-[#00ABE4] font-semibold mt-1">
                      {membro.cargo}
                    </p>
                  </div>
                </div>

                {/* CONTEÚDO */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {membro.especialidades.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-[#00ABE4]/10
                          border
                          border-[#00ABE4]/20
                          text-[#00ABE4]
                          text-xs
                          font-medium
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {membro.descricao}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-10">
          {equipe.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-10 h-2 bg-[#00ABE4]"
                  : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
