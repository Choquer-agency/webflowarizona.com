import { getDomainConfig } from "@/lib/getDomainConfig";
import { ClientLayout } from "@/components/ClientLayout";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { WhyWebflow } from "@/components/WhyWebflow";
import { WebflowServicesBreakdown } from "@/components/WebflowServicesBreakdown";
import { WebflowVsWordPress } from "@/components/WebflowVsWordPress";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { LocalTrust } from "@/components/LocalTrust";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { MobileCta } from "@/components/MobileCta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  const config = getDomainConfig();

  return (
    <ClientLayout domain={config.domain} region={config.region}>
      <Nav locality={config.locality} />
      <Hero
        h1={config.heroH1}
        subhead={config.heroSubhead}
        region={config.region}
      />
      <Problem />
      <MobileCta />
      <Portfolio />
      <Testimonials locality={config.locality} />
      <CtaBanner />
      <Stats />
      <WhyWebflow />
      <MobileCta />
      <WebflowServicesBreakdown />
      <WebflowVsWordPress />
      <Services />
      <Industries locality={config.locality} region={config.region} />
      <Process />
      <MobileCta />
      <Pricing region={config.region} />
      <LocalTrust
        locality={config.locality}
        stateCode={config.stateCode}
        region={config.region}
        nearbyAreas={config.nearbyAreas}
      />
      <Partners />
      <FAQ locality={config.locality} region={config.region} />
      <Footer locality={config.locality} />
    </ClientLayout>
  );
}
