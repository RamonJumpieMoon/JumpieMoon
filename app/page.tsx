import { Ecossistema } from "@/components/landing-page/Ecossistema";
import { FooterLandingPage } from "@/components/landing-page/Footer";
import { Fundadores } from "@/components/landing-page/Fundadores";
import { HeaderLandingPage } from "@/components/landing-page/Header";
import { Holding } from "@/components/landing-page/Holding";
import { Impacto } from "@/components/landing-page/ImpactoSocial";
import { TimeDesenvolvimento } from "@/components/landing-page/TimeDesenvolvimento";

export default function Home() {
  return (
    <div className="bg-[#050B14] text-slate-100 font-outfit overflow-x-hidden">
      <HeaderLandingPage />
      <div>
        <Holding />
        <TimeDesenvolvimento />
        <Ecossistema />
        <Impacto />
        <Fundadores />
      </div>
      <FooterLandingPage />
    </div>
  );
}
