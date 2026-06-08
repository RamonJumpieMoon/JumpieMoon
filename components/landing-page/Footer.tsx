import { GiMoonOrbit } from "react-icons/gi";
import { FaInstagram, FaMoon, FaLinkedin } from "react-icons/fa";

export const FooterLandingPage = () => {
  return (
    <footer className="border-t border-white/10 pt-24 pb-12 relative z-10 bg-[#02050A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <a
              href="#"
              className="text-3xl font-light tracking-widest text-white flex items-center gap-2 group mb-6"
            >
              <GiMoonOrbit className="w-8 h-8 text-[#00ABE4]" />
              Jumpie
              <span className="font-bold">Moon</span>
            </a>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-10">
              Transformando o Oeste Baiano através de soluções digitais
              proprietárias e impacto cultural.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-[#00ABE4] transition text-[#00ABE4] hover:text-[#050B14]"
              >
                <FaInstagram className="w-5 h-5 text-[#00ABE4]" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-[#00ABE4] transition text-[#00ABE4] hover:text-[#050B14]"
              >
                <FaLinkedin className="w-5 h-5 text-[#00ABE4]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Portfólio
            </p>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-[#00ABE4] transition">
                  Multi-Uni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00ABE4] transition">
                  Galeria Decolonial
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              A Empresa
            </p>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#holding" className="hover:text-[#00ABE4] transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#manifesto"
                  className="hover:text-[#00ABE4] transition"
                >
                  Manifesto
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contato Direto
            </p>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <i data-lucide="mail" className="w-4 h-4 text-[#00ABE4]"></i>{" "}
                jumpiemoon@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <i data-lucide="map-pin" className="w-4 h-4 text-[#00ABE4]"></i>{" "}
                Barreiras, Bahia - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>
            © <span id="year"></span> Jumpiemoon Software. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-1 text-slate-400">
              Database Status:{" "}
              <span
                id="db-status"
                className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
              ></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
