import {
  Building2,
  Users,
  Orbit,
  HeartHandshake,
  BriefcaseBusiness,
  Mail,
  Menu,
  MoonIcon,
} from "lucide-react";

import { GiMoonOrbit } from "react-icons/gi";

export const HeaderLandingPage = () => {
  return (
    <header
      id="main-header"
      className="fixed top-0 z-50 w-full transition-all duration-500 py-6"
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-6">
        <div className="flex items-center gap-4 mr-10">
          <a
            href="#"
            className="text-3xl font-light tracking-widest text-white flex items-center gap-3 group"
          >
            <GiMoonOrbit className="w-8 h-8 text-[#00ABE4]" />
            Jumpie<span className="font-bold">Moon</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-10 font-semibold text-sm tracking-wide text-slate-300">
          <a
            href="#holding"
            className="flex items-center gap-2 hover:text-[#00ABE4] transition"
          >
            <Building2 className="w-5 h-5 text-[#00ABE4]" />
            <span>A Holding</span>
          </a>

          <a
            href="#time"
            className="flex items-center gap-2 hover:text-[#00ABE4] transition"
          >
            <Users className="w-5 h-5 text-[#00ABE4]" />
            <span>Nosso Time</span>
          </a>

          <a
            href="#ecossistema"
            className="flex items-center gap-2 hover:text-[#00ABE4] transition"
          >
            <Orbit className="w-5 h-5 text-[#00ABE4]" />
            <span>Ecossistema</span>
          </a>

          <a
            href="#impacto"
            className="flex items-center gap-2 hover:text-[#00ABE4] transition"
          >
            <HeartHandshake className="w-5 h-5 text-[#00ABE4]" />
            <span>Impacto Social</span>
          </a>

          <a
            href="#lideranca"
            className="flex items-center gap-2 hover:text-[#00ABE4] transition"
          >
            <BriefcaseBusiness className="w-5 h-5 text-[#00ABE4]" />
            <span>Sócios</span>
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8">
          <button
            id="btn-login-header"
            className="text-sm font-bold text-slate-300 hover:text-white transition"
          >
            Entrar
          </button>
          <a
            href="mailto:jumpiemoon@gmail.com"
            className="bg-blue-gradient text-[#050B14] px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition transform shadow-lg shadow-[#00ABE4]/20"
          >
            <Mail className="w-4 h-4" /> Fale com o CEO
          </a>
        </div>

        <button id="mobile-menu-btn" className="lg:hidden text-white">
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};
