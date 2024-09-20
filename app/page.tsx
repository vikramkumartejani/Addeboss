"use client";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { AnimatedBeamDemo } from "@/components/AnimatedBeam";

export default function Home() {
  return (
    <div className="w-[300px] h-[100px]">
      <AnimatedBeamDemo/>

      <PulsatingButton>Join Affiliate Program</PulsatingButton>
    </div>
  );
}
