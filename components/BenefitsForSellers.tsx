import React from "react";
import Timeline from "./Timeline";
import Safari from "@/components/magicui/safari";

const BenefitsForSellers = () => {
  return (
    <div className="h-full px-4 py-[30px] md:py-[60px] w-full max-w-[1232px] mx-auto">
      <h1 className="text-[30px] sm:text-[45px] leading-[46px] font-bold text-[#141736] text-center pb-[21px] md:pb-[66px]">
        卖家无与伦比的好处
      </h1>

      <div className="flex md:flex-row flex-col justify-between items-start w-full gap-[30px] sm:gap-[50px] lg:gap-[70px]">
        <div className=" md:max-w-[616px] w-full ">
          <div className="">
            <p className="mb-[21px] md:mb-[30px] xl:w-[617px] font-normal lg:leading-[40px] leading-[28px] text-[17px] sm:text-[20px] lg:text-[24px] opacity-70 text-[#141736]">
              CNRMarketplace
              提供一系列无与伦比的好处，旨在赋能仿品市场的卖家。享受一个全面的平台，简化你的销售流程，通过我们的精准营销接触全球受众，并通过我们的顶级安全措施保护你的业务。我们提供安全交易、无限提款和与客户直接沟通等功能，满足你在竞争激烈的仿品行业中成长和成功所需的一切。
            </p>
            <button className="mb-[20px] bg-[#2A9CF5] w-[199px] sm:w-[276px] h-[35px] sm:h-[46px] rounded-[10px] text-[12px] sm:text-[16px] font-[600] text-white">
              Learn More About Us!
            </button>
          </div>

          <div className="w-full relative md:h-[2400px]">
            <div className="sticky top-10 w-full   bg-white p-4">
              <Safari url="magicui.design" className="size-full" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default BenefitsForSellers;
