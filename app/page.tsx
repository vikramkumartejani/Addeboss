"use client";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";
import Conclusion from "@/components/Conclusion";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import Cnr from "@/components/Cnr";
import Sell from "@/components/Sell";
import Timeline from "@/components/Timeline";
import Benefit from "@/components/Benefit";


export default function Home() {
  return (
    <div>
      <AnimatedBeamDemo/>
      <AnimatedListDemo/>
      <Cnr/>  
      <Sell/>
      <Benefit/>

      <PulsatingButton>Join Affiliate Program</PulsatingButton>
      <Conclusion/>
    </div>
  );
}
