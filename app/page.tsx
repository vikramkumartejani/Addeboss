"use client";
import AboutUs from "@/components/AboutUs";
import CNRMarketplace from "@/components/CNRMarketplace";
import BenefitsForSellers from "@/components/BenefitsForSellers";
import JoinUs from "@/components/JoinUs";
import FAQ from "@/components/FAQ";
 import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import IntegratedPlatform from "@/components/IntegratedPlatform";
 

export default function Home() {
  return (
    <div>
      <IntegratedPlatform/>
      <CNRMarketplace/>
      <BenefitsForSellers/>
      <WhyChooseUs/>
      <JoinUs/>
      <FAQ/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
