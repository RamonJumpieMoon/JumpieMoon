import { GraduationCap } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Palette } from "lucide-react";
import Link from "next/link";

export const Ecossistema = () => {
  return (
    <section id="ecossistema" className="py-32 px-6 relative z-10 bg-[#050B14]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 text-white">
            Nosso Ecossistema Digital
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Soluções proprietárias desenvolvidas com foco em escalabilidade e
            propósito regional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href={"https://multiverso-universitario.vercel.app/"}>
            <div className="glass-card p-10 group hover:border-[#00ABE4]/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ABE4]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-16 h-16 bg-[#00ABE4]/20 rounded-2xl flex items-center justify-center border border-[#00ABE4]/30">
                  <GraduationCap className="w-8 h-8 text-[#00ABE4]" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-full">
                  EdTech & Moradia
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white relative z-10">
                Multi-Uni
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                O ecossistema definitivo para suporte à vida universitária e
                moradia estudantil. Conecta universitários a serviços essenciais
                com o apoio estratégico do IFBA.
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-[#00ABE4] font-bold text-sm">
                  Status: Em Operação
                </span>
              </div>
            </div>
          </Link>

          <Link href={"https://galeriadecolonial1-0.vercel.app/"}>
            <div className="glass-card p-10 group hover:border-[#E9F1FA]/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9F1FA]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-16 h-16 bg-[#00ABE4]/20 rounded-2xl flex items-center justify-center border border-[#00ABE4]/30">
                  <Palette className="w-8 h-8 text-[#00ABE4]" />
                </div>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-full">
                  Marketplace de Arte
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white relative z-10">
                Galeria Decolonial
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                Marketplace focado na comercialização de arte contemporânea do
                Oeste Baiano. Modelo disruptivo com taxa justa de 15%,
                garantindo autonomia total ao artista regional.
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-[#E9F1FA] font-bold text-sm">
                  Status: MVP Disponível
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#00ABE4]" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
