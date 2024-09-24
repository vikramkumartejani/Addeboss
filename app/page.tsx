"use client";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import AboutUs from "@/components/AboutUs";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import Sell from "@/components/Sell";
import Timeline from "@/components/Timeline";
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
      <Sell/>
      <BenefitsForSellers/>
      {/* <PulsatingButton>Join Affiliate Program</PulsatingButton> */}
      <WhyChooseUs/>
      <JoinUs/>
      <FAQ/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
