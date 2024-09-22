import React from "react";
import Timeline from "./Timeline";
import Image from "next/image";
import IMG from '../app/assets/image.svg'

const Benefit = () => {
  return (
    <div className="px-20" >
      <h1 className="text-[45px] font-[700] text-center" >卖家无与伦比的好处</h1>

      <div className="flex justify-between py-10  " >
        <div className="flex flex-col gap-6" >
            <p className="max-w-[617px] font-[400] text-[24px] opacity-70 ml-8 " >CNRMarketplace 提供一系列无与伦比的好处，旨在赋能仿品市场的卖家。享受一个全面的平台，简化你的销售流程，通过我们的精准营销接触全球受众，并通过我们的顶级安全措施保护你的业务。我们提供安全交易、无限提款和与客户直接沟通等功能，满足你在竞争激烈的仿品行业中成长和成功所需的一切。</p>

            <button className="bg-[#2A9CF5] w-[276px] p-4 rounded-[10px] text-[16px] font-[600] text-white ml-8 " >Learn More About Us!</button>

            <Image src ={IMG} alt="" width={606} height={541} className="rounded-[28px]" />

        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
