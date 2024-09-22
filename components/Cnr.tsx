import React from "react";
import hand from '../app/assets/hand.svg'
import Image from "next/image";

const Cnr = () => {
  return (
    <div className=" w-full  bg-[#2A9CF5] py-12 ">
      <div className="max-w-[1440px] m-auto">
        <h2 className="text-[55px] font-[700] text-center text-white"> 
          你为什么选择了 CNR MARKETPLACE <Image src={hand} alt="" width={50} height={47} />？
        </h2>
        <div className="flex justify-between gap-11 py-10 px-10  flex-wrap" >
            <div className="flex flex-col gap-5" >
                <div className="w-[100px] h-[3px] bg-[#141736]" ></div>
                <p className="font-[400] text-[20px] text-white max-w-[372px]" >你找到了唯一一个旨在解决卖家面临的独特挑战的平台，提供安全且全面的解决方案，以触及全球观众。</p>
            </div>
            <div className="flex flex-col gap-5" >
                <div className="w-[100px] h-[3px] bg-[#141736]" ></div>
                <p className="font-[400] text-[20px] text-white max-w-[372px]" >你意识到这个平台将会被数百万国际客户访问，他们渴望一个使用简单、能够找到许多卖家、进行购买和交流的平台。</p>
            </div>
            <div className="flex flex-col gap-5" >
                <div className="w-[100px] h-[3px] bg-[#141736]" ></div>
                <p className="font-[400] text-[20px] text-white max-w-[372px]" >你明白，与其在多个平台之间切换，这会使购物体验复杂化并影响转化率，不如使用一个一体化的平台。这种方法简化了管理，节省了时间，使你可以专注于建立客户关系和发展业务。</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cnr;
