import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Logo from '../app/assets/logo.svg'
import Meta from "../app/assets/Meta.svg";
import Twiiter from "../app/assets/Twitter.svg";
import Instagram from "../app/assets/Instagram.svg";
import Youtube from "../app/assets/Youtube.svg";

const Footer = () => {
  return (
    <div className='bg-[#141736] w-full px-3'>
        <div className='w-full max-w-[1220px] mx-auto text-white pt-9'>
            <div className='pb-[35px] sm:pb-[60px] flex items-start lg:flex-nowrap flex-wrap gap-10 justify-between'>
                <div>
                    <Image src={Logo} alt='Logo' />
                    <p className='text-[16px] sm:text-[20px] sm:leading-[25px] font-normal opacity-50 sm:max-w-[400px] pt-[38px] pb-6 sm:pb-[60px]'>CNRMarketplace is a secure, user-friendly  platform for buying and selling high-quality replica goods globally.</p>
                    <div className='flex items-center gap-5'>
                        <Link href='/'><Image src={Meta} alt='Meta' width={31} height={21}/></Link>
                        <Link href='/'><Image src={Twiiter} alt='Twiiter' width={25} height={23}/></Link>
                        <Link href='/'><Image src={Instagram} alt='Instagram' width={26} height={26}/></Link>
                        <Link href='/'><Image src={Youtube} alt='Youtube' width={37} height={25}/></Link>
                    </div>
                </div>
                <div className='w-full sm:w-fit flex items-start gap-[85px] sm:gap-7 xl:gap-10 sm:mt-5 text-nowrap'>
                    <div className='flex flex-col'>
                        <h3 className='text-white text-[17px] sm:text-[20px] leading-[25px] font-semibold mb-5'>Company</h3>
                        <Link href='/' className='text-[17px] sm:text-[20px] leading-[25px] font-normal opacity-50 mb-2.5'>Careers</Link>
                        <Link href='#aboutus' className='text-[17px] sm:text-[20px] leading-[25px] font-normal opacity-50 mb-2.5'>About Us</Link>
                        <Link href='/' className='text-[17px] sm:text-[20px] leading-[25px] font-normal opacity-50'>How it Works</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-white text-[17px] sm:text-[20px] leading-[25px] font-semibold mb-5'>链接</h3>
                        <Link href='/' className='text-[17px] sm:text-[20px] leading-[25px] font-normal opacity-50 mb-2.5'>创建账户</Link>
                        <Link href='/' className='text-[17px] sm:text-[20px] leading-[25px] font-normal opacity-50'>登录</Link>
                    </div>
                </div>
                <div className='w-full sm:w-fit sm:mt-5'>
                    <h3 className='text-[16px] sm:text-[20px] leading-[25px] font-semibold'>订阅我们的新闻通讯</h3>
                    <input type="text" placeholder='电子邮件地址' className='px-8 mt-6 text-[13px] sm:text-[16px] leading-[25px] font-normal text-opacity-50 h-[49px] sm:h-[58px] sm:max-w-[300px] w-full xl:w-[363px] border-[1.5px] border-[#FFFFFF] border-opacity-10 outline-none bg-transparent rounded-xl' />
                    <div className='flex items-center gap-1.5 mt-3'>
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-[#898B9B] text-[13px] sm:text-[16px] sm:leading-[22px] font-normal w-[248px] md:w-[270px] lg:w-[294px]'>By clicking here you agree to our terms & conditions</p>
                    </div>
                    <button className='bg-[#0177FB] w-[164px] h-[37px] sm:h-[44px] rounded-[21px] text-[16px] leading-[27px] font-semibold mt-3.5'>Subscribe</button>
                </div>
            </div>
            <div className='border-t border-[#2B2E4A] w-full pt-5 sm:pt-8 pb-6 sm:pb-10 flex items-center md:flex-row flex-col-reverse gap-5 justify-between'>
                <p className='text-[15px] sm:text-[20px] sm:leading-[25px] font-normal opacity-50 text-center'>cnrmarketplace © 2024 All Rights Reserved</p> 
                <div className='flex items-center gap-5 md:gap-12 md:flex-nowrap flex-wrap justify-center'>
                    <Link href='/' className='text-[14px] sm:text-[20px] leading-[25px] font-normal opacity-50'>Terms & Conditions</Link>
                    <Link href='/' className='text-[14px] sm:text-[20px] leading-[25px] font-normal opacity-50'>Privacy Policy</Link>
                    <Link href='#faq' className='text-[14px] sm:text-[20px] leading-[25px] font-normal opacity-50'>FAQs</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer