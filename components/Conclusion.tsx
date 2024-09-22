import Image from "next/image";
import React from "react";
import Infs from "../app/assets/Rectangle 81242093.svg";

const Conclusion = () => {
  return (
    <div className="flex justify-between w-full max-w-[1240px] m-auto flex-wrap">
      <div className="" >
        <Image src={Infs} alt="" width={500} height={470} />
      </div>

      <div className="w-full max-w-[600px] flex flex-col gap-[20px]" >
        <div className="flex gap-[28px] items-center">
          <p className="text-[20px] font-[700]" >关于我们</p>
          <div className="w-[290px] h-[3px] bg-[#141736] bg-opacity-10  " >
            <div className=" h-[3px] bg-[#2A9CF5] w-[100px]" >  </div>
          </div>
        </div>
        <p className="text-[45px] font-[700]" >结论</p>
        <p className="max-w-[500px] opacity-70 "  >
          CNRMarket
          不仅仅是一个市场；它是一个卖家和买家无缝连接的社区。我们的平台旨在解决仿品市场的复杂性，为所有参与者提供安全、高效和有回报的体验。今天就加入我们，发现为什么
          CNRMarketplace 是销售仿品的最佳选择。
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
