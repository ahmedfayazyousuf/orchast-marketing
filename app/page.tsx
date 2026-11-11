import { Footer } from "@/components/navigations/footer/Footer";
import { Header } from "@/components/navigations/header/Header";
import { HomeAgents } from "@/components/sections/home/HomeAgents";
import { HomeCapabilities } from "@/components/sections/home/HomeCapabilities";
import { HomeCTA } from "@/components/sections/home/HomeCTA";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeOpportunity } from "@/components/sections/home/HomeOpportunity";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeOpportunity />
        <HomeAgents />
        <HomeCapabilities />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
