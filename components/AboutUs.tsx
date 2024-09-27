import Image from "next/image";
import React from "react";
import About from "../app/assets/aboutus.svg";

const AboutUs = () => {
  return (
    <div id="aboutus" className="flex justify-between items-center lg:items-start w-full max-w-[1232px] flex-col lg:flex-row m-auto pb-[40px] sm:pb-[110px] lg:py-[110px] gap-12 px-3">
      <Image
        src={About}
        alt=""
        width={500}
        height={470}
        className="flex items-center justify-center"
      />
      <div className="w-full flex flex-col gap-[20px]">
        <div className="flex gap-[28px] items-center">
          <p className="text-nowrap text-base sm:text-[20px] text-[#141736] leading-[36px] font-bold">
            关于我们
          </p>
          <div className="max-w-[290px] w-full h-[3px] bg-[#141736] bg-opacity-10  ">
            <div className=" h-[3px] bg-[#2A9CF5] w-[100px]"> </div>
          </div>
        </div>
        <p className="text-3xl sm:text-[45px] font-bold leading-[46px] text-[#141736]">
          结论
        </p>
        <p className="lg:max-w-[575px] opacity-70 text-[#141736] text-lg sm:text-[24px] sm:leading-[32px] font-normal">
          CNRMarket
          不仅仅是一个市场；它是一个卖家和买家无缝连接的社区。我们的平台旨在解决仿品市场的复杂性，为所有参与者提供安全、高效和有回报的体验。今天就加入我们，发现为什么
          CNRMarketplace 是销售仿品的最佳选择。
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
