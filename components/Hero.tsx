import React from 'react'
import Man from '../app/assets/hero.png'
import Search from '../app/assets/search.svg'
import Image from 'next/image'
 
const Hero = () => {
  return (
    <>
        <div className='w-full bg-[#141736] px-16 py-10 pb-28' >
            <div className='flex justify-end mb-10'>
                <p className='font-[600] text-[15px] text-white content-center mr-10'>登录</p>
                <button className='bg-[#2A9CF5] w-[246px] h-[46px] rounded-[10px] text-white'>创建账户</button>
            </div>
            <div className='flex'>
                <div className='mr-16'>
                    <h1 className='max-w-[440px] w-full font-[700] text-[73px] text-white leading-[110px]'>
                        我们有客户，
                    您有产品
                    </h1>
                    <p className='max-w-[534px] w-full font-[400] text-[24px] text-[#ffffff] opacity-[70%] my-6 leading-[45px]'>
                    让我们来处理吧。我们为您提供所有必要的工具、无限量的客户，以及一个可以建立您业务的平台，而您只需专注于您已经擅长的事情。
                    </p>
                    <div className='flex'>
                        <button className='w-full max-w-[262px] h-[46px] border-[1.64px] rounded-[23px] font-[600] text-[18px] text-white'>成为卖家</button>
                        <p className='text-white text-[18px] font-[600] content-center ml-14'>了解更多</p>
                    </div>
                </div>
                <div className='max-w-[648px]'>
                    <Image src={Man} alt="hero" />
                </div>
            </div>
        </div>
        <div className='relative w-full bg-[#2A9CF5] pt-[330px] pb-20 px-16'>
            <div className='pb-12'>
                <h1 className='font-[700] text-[55px] text-white text-center'>
                你为什么选择了 CNR MARKETPLACE 🫵？
                </h1>
            </div>
            <div className='flex justify-around'>
                <div className='max-w-[370px] w-full' >
                    <div className='w-[97px] border-[#141737] border-[3px] rounded-[3px] mb-3'></div>
                    <p className='text-[20px] font-[400] text-white'>
                    你找到了唯一一个旨在解决卖家面临的独特挑战的平台，提供安全且全面的解决方案，以触及全球观众。
                    </p>
                </div>
                <div className='max-w-[370px] w-full'>
                    <div className='w-[97px] border-[#141737] border-[3px] rounded-[3px] mb-3'></div>
                    <p className='text-[20px] font-[400] text-white'>
                    你意识到这个平台将会被数百万国际客户访问，他们渴望一个使用简单、能够找到许多卖家、进行购买和交流的平台。
                    </p>
                </div>
                <div className='max-w-[370px] w-full'>
                    <div className='w-[97px] border-[#141737] border-[3px] rounded-[3px] mb-3'></div>
                    <p className='text-[20px] font-[400] text-white'>
                    你明白，与其在多个平台之间切换，这会使购物体验复杂化并影响转化率，不如使用一个一体化的平台。这种方法简化了管理，节省了时间，使你可以专注于建立客户关系和发展业务。
                    </p>
                </div>
            </div>
        </div>
        <div className='absolute bottom-[-550px] max-w-[1224px] h-[400px] rounded-[30px] bg-white ml-14 px-16 py-52 flex flex-col justify-center items-center'>
            <Image src={Search} alt="search"></Image>
            <h1 className='font-[700] text-[45px] text-[#141736]'><span className='text-red-600'>‼️</span>你知道吗<span className='text-red-600'>‼️</span></h1>
            <p className='font-[400] text-[24px] opacity-[70%] text-[#141736] leading-[50px] text-center'>
            2016年，仿制品交易额达到惊人的5090亿美元，占全球贸易的3.3%，比2013年有了显著增长。
            这种不断增长的需求为卖家进入一个利润丰厚的市场提供了绝佳机会。
            </p>
        </div>
    </>
  )
}

export default Hero
