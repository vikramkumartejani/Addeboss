'use client'
import React, { useState } from 'react'
import DotOne from '../app/assets/hero-dot.svg'
import DotTwo from '../app/assets/hero-dot-two.svg'
import DotThree from '../app/assets/dot-three.svg'
import LineOne from '../app/assets/hero-lines.svg'
import DidYouKnow from '../app/assets/did-you-know.svg'
import DidYouKnowBG from '../app/assets/did-you-know-bg.svg'
 import Image from 'next/image'
import { AnimatedListDemo } from './AnimatedListDemo'
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line } from "react-icons/ri";
import Link from 'next/link'
 

const Hero = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <>
        <div className=' w-full relative overflow-hidden'>
            <Image src={DotOne} alt='Dot' width={157} height={157} className="absolute -top-3 left-[150px] sm:left-[256px] sm:block hidden" />
            <Image src={DotThree} alt='Dot' width={157} height={157} className="absolute -top-7 left-[100px] sm:left-[256px] sm:hidden block" />
            <Image src={DotTwo} alt='Dot' width={82} height={82} className="absolute top-[182px] -right-10 sm:-right-5" />
            <Image src={LineOne} alt='Dot'  className="absolute top-[450px] left-0" />
            <div className='w-full max-w-[1240px] px-6 mx-auto pt-10 sm:pt-14 pb-[300px]'>
                {/* Navbar Menu */}
                <div className='w-full flex items-end justify-end'>
                    <div className='md:flex hidden items-center gap-[68px] justify-end'>
                        <Link href='https://cnrmarketplace.com/my-account/' className='font-semibold text-[15px] text-black leading-[32px]'>登录</Link>
                        <Link href='https://cnrmarketplace.com/vendor-register/' target='_blank' className='flex items-center justify-center bg-[#2A9CF5] w-[216px] h-[46px] rounded-[10px] text-[#F6F9FE] text-[15px] font-semibold'>创建账户</Link>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='md:hidden block relative z-50'><RiMenu4Line className='text-black' size={35} />
                    </button>
                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                        <motion.div
                            className='md:hidden fixed top-0 right-0 bg-black w-full h-full flex flex-col items-center justify-center z-50'
                            initial={{ x: '100%' }}  
                            animate={{ x: 0 }} 
                            exit={{ x: '100%' }} 
                            transition={{ duration: 0.3 }}
                        >
                            <button
                            className='absolute top-7 right-4'
                            onClick={() => setIsMobileMenuOpen(false)}
                            >
                            <RxCross1 size={30} className='text-white' />
                            </button>
                            <Link href='https://cnrmarketplace.com/my-account/' className='font-semibold text-[18px] text-white mb-4'>登录</Link>
                            <Link href='https://cnrmarketplace.com/vendor-register/' className='flex items-center justify-center bg-[#2A9CF5] w-[216px] h-[46px] rounded-[10px] text-[#F6F9FE] text-[15px] font-semibold'>创建账户</Link>
                        </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Center Content */}
                <div className='mt-10 sm:mt-20 flex items-center gap-10 lg:gap-5 justify-between lg:flex-row flex-col relative z-20'>
                    <div className='w-full'>
                        <h1 className='max-w-[270px] sm:max-w-[437px] w-full font-bold text-[44px] sm:text-[72px] text-[#141736] leading-[67px] sm:leading-[110px]'> 我们有客户， 您有产品</h1>
                        <p className='lg:max-w-[534px] w-full font-normal text-[15px] sm:text-[24px] text-[#141736] opacity-70 mt-[19px] mb-[36px] leading-[27px] sm:leading-[45px]'>让我们来处理吧。我们为您提供所有必要的工具、无限量的客户，以及一个可以建立您业务的平台，而您只需专注于您已经擅长的事情。</p>
                        <div className='flex gap-10 sm:gap-[63px] items-center'>
                            <Link href='https://cnrmarketplace.com/become-a-vendor/' className='flex items-center justify-center w-[161px] sm:w-[260px] bg-[#2A9CF5] h-[28px] sm:h-[46px] border-[1.64px] rounded-[23px] font-semibold text-[11px] sm:text-[18px] text-white'>成为卖家</Link>
                            <Link href='https://d-themes.com/wordpress/wolmart/elements/about-us/' target='_blank' className='text-black text-[11px] sm:text-[18px] font-semibold leading-[36px] underline underline-offset-4'>了解更多</Link>
                        </div>
                    </div>
                    <div className='w-full'>
                        <AnimatedListDemo/>
                    </div>
                </div>
            </div>
        </div>

        {/* Did you Know */}
        <div className='w-full px-5'>
            <div className='custom-shadow -mt-[250px] sm:-mt-[200px] py-[70px] px-5 bg-white rounded-[30px] w-full max-w-[1224px] mx-auto relative z-20'>
                <Image src={DidYouKnowBG} alt='DidYouKnowBG' className='absolute bottom-0 left-0' />
                <div className='text-center flex items-center justify-center flex-col gap-8'>
                    <Image src={DidYouKnow} alt='Did you know' />
                    <h2 className='text-[#141736] text-[32px] sm:text-[45px] sm:leading-[46px] font-bold'>‼️你知道吗‼️</h2>
                    <p className='text-[#141736] text-[15px] sm:text-[24px] leading-[36px] sm:leading-[50px] font-normal opacity-70 max-w-[995px] mx-auto'>2016年，仿制品交易额达到惊人的5090亿美元，占全球贸易的3.3%，比2013年有了显著增长。这种不断增长的需求为卖家进入一个利润丰厚的市场提供了绝佳机会。</p>
                </div>
            </div>
        </div>

        {/* CNR MARKETPLACE */}
        <div className='-mt-[400px] w-full bg-[#2A9CF5] pb-[85px] px-5'>
            <div className='pt-[470px]'>
                <h2 className='text-[35px] sm:text-[55px] font-bold text-white text-center'>你为什么选择了 CNR MARKETPLACE 🫵？</h2>
                <div className='mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-[1220px] mx-auto'>
                    <div>
                        <div className='w-[83px] sm:w-[97px] h-[3.75px] bg-[#141736]'></div>
                        <p className='mt-6 text-[17px] sm:text-[20px] leading-[27px] font-normal text-white'>你找到了唯一一个旨在解决卖家面临的独特挑战的平台，提供安全且全面的解决方案，以触及全球观众。</p>
                    </div>
                    <div>
                        <div className='w-[83px] sm:w-[97px] h-[3.75px] bg-[#141736]'></div>
                        <p className='mt-6 text-[17px] sm:text-[20px] leading-[27px] font-normal text-white'>你意识到这个平台将会被数百万国际客户访问，他们渴望一个使用简单、能够找到许多卖家、进行购买和交流的平台。</p>
                    </div>
                    <div>
                        <div className='w-[83px] sm:w-[97px] h-[3.75px] bg-[#141736]'></div>
                        <p className='mt-6 text-[17px] sm:text-[20px] leading-[27px] font-normal text-white'>你明白，与其在多个平台之间切换，这会使购物体验复杂化并影响转化率，不如使用一个一体化的平台。这种方法简化了管理，节省了时间，使你可以专注于建立客户关系和发展业务。</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
