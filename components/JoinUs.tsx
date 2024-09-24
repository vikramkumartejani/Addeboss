import React from "react";
import BgImage from "../app/assets/bg.svg";
import Image from "next/image";
import PulsatingButton from "@/components/magicui/pulsating-button";

const JoinUs = () => {
  return (
    <div className="w-full relative">
      <div className="bg-cover bg-center">
        {/* Background Image */}
        <Image src={BgImage} alt="bg" width={1440} height={1440} className="w-full h-[500px] object-cover" />
        
        {/* Overlay */}
        <div className="py-[140px] absolute px-4 md:px-8 inset-0 bg-[#141736B2] bg-opacity-50 flex items-center justify-center z-30">
          <div className="text-center  mx-auto">
            {/* Heading */}
            <h1 className="text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold leading-snug md:leading-tight lg:leading-[50px]">
              今天加入我们，让你的业务腾飞
            </h1>
            
            {/* Description */} 
            <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed md:leading-[28px] font-normal py-8 lg:py-10 opacity-80">
              准备好将你的业务提升到一个新水平了吗？加入 CNRMarket，成为一个蓬勃发展的卖家和买家社区的一部分。以下是开始的步骤：
            </p>
            
            {/* Buttons */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
              <PulsatingButton>Sign Up</PulsatingButton>
              <PulsatingButton>List Your Products</PulsatingButton>
              <PulsatingButton>Start Selling</PulsatingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
