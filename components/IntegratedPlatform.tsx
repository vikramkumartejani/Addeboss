'use client'
import Image from 'next/image'
import React, { useState } from 'react';
import leftImage from '../app/assets/left-image.svg'
import Left2 from '../app/assets/left-2.svg'
import RightImage from '../app/assets/right-image.svg'
import Arrow from '../app/assets/arrow-icons.svg'
import { Beam } from './Beam'

const IntegratedPlatform = () => {
    const slides: string[] = [
        '我们都知道，简单是关键。为什么还要不断切换过时且不相关的工具，而不是在一个地方简化一切？我们的平台是你业务一直期待的升级——一个真正的一体化解决方案，将你成功销售所需的一切集于一处。忘掉管理多个服务的麻烦；在这里，你将找到一个全面的工具平台，宣在让销售变得更轻松、更智能、更有利可图。告别旧的方式，迎接一个与你一样雄心勃勃的平台。',
        '我们都知道，简单是关键。为什么还要不断切换过时且不相关的工具，而不是在一个地方简化一切？我们的平台是你业务一直期待的升级——一个真正的一体化解决方案，将你成功销售所需的一切集于一处。忘掉管理多个服务的麻烦；在这里，你将找到一个全面的工具平台，宣在让销售变得更轻松、更智能、更有利可图。告别旧的方式，迎接一个与你一样雄心勃勃的平台。',
        '我们都知道，简单是关键。为什么还要不断切换过时且不相关的工具，而不是在一个地方简化一切？我们的平台是你业务一直期待的升级——一个真正的一体化解决方案，将你成功销售所需的一切集于一处。忘掉管理多个服务的麻烦；在这里，你将找到一个全面的工具平台，宣在让销售变得更轻松、更智能、更有利可图。告别旧的方式，迎接一个与你一样雄心勃勃的平台。',
        '我们都知道，简单是关键。为什么还要不断切换过时且不相关的工具，而不是在一个地方简化一切？我们的平台是你业务一直期待的升级——一个真正的一体化解决方案，将你成功销售所需的一切集于一处。忘掉管理多个服务的麻烦；在这里，你将找到一个全面的工具平台，宣在让销售变得更轻松、更智能、更有利可图。告别旧的方式，迎接一个与你一样雄心勃勃的平台。',
        '我们都知道，简单是关键。为什么还要不断切换过时且不相关的工具，而不是在一个地方简化一切？我们的平台是你业务一直期待的升级——一个真正的一体化解决方案，将你成功销售所需的一切集于一处。忘掉管理多个服务的麻烦；在这里，你将找到一个全面的工具平台，宣在让销售变得更轻松、更智能、更有利可图。告别旧的方式，迎接一个与你一样雄心勃勃的平台。',
      ];
    const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className='w-full relative px-3 overflow-hidden'>
        <Image src={leftImage} alt='right' className='absolute -left-28 sm:left-0 top-10 sm:block hidden' />
        <Image src={Left2} alt='right' className='absolute left-0 top-10 sm:hidden block' />
        <Image src={RightImage} alt='right' className='absolute -right-6 sm:right-0 top-[161px]' />
        <div className='w-full max-w-[1232px] mx-auto pt-12 sm:pt-[114px]'>
            <div>
                <h1 className='text-center text-[#141736] text-[30px] md:text-[45px] leading-[46px] font-bold'>你需要的一体化平台</h1>
                <div className='w-full md:mt-[70px] flex items-center md:flex-row flex-col justify-between gap-5'>
                    <div className='w-full'>
                        <Beam/>
                    </div>
                    <div className='w-full flex items-center justify-center flex-col gap-8 sm:gap-12'>
                        <Image src={Arrow} alt='Arrow' />
                        <div className='flex flex-col gap-[31px]'>
                            <div className="text-black text-[15px] sm:text-[18px] leading-[35px] lg:leading-[50px] font-medium text-center max-w-[550px]">
                                {slides[activeIndex]}
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                            index === activeIndex ? 'bg-[#2A9CF5]' : 'bg-[#DEEDFF]'
                                        }`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntegratedPlatform