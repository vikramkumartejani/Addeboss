import React from "react";
import logo from "../assets/logo.png";
import meta from "../assets/meta.svg";
import x from "../assets/x.svg";
import insta from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
const w = () => {
  return (
    <footer className="bg-[#141736] text-white text-center pt-12">
      <div className=" px-4 max-w-[1240px] mx-auto flex justify-between flex-col">
        <div className="flex justify-between flex-wrap gap-5 ">
          <div className=" lg:flex-1  flex flex-col gap-9 ">
            {/* <img src={logo} alt="" className="w-14 h-14" /> */}
            <p className="text-left max-w-[400px] text-[20px] font-normal opacity-50">
              CNRMarketplace is a secure, user-friendly platform for buying and
              selling high-quality replica goods globally.
            </p>
            <div className="flex gap-8 mt-3 ">
              <a href="#">
                {/* <img src={meta} alt="" className="w-[37px] h-[25px]" /> */}
              </a>
              <a href="#">
                {/* <img src={x} alt="" className="w-[37px] h-[25px]" /> */}
              </a>
              <a href="#">
                {/* <img src={insta} alt="" className="w-[37px] h-[25px]" /> */}
              </a>
              <a href="#">
                {/* <img src={youtube} alt="" className="w-[37px] h-[25px]" /> */}
              </a>
            </div>
          </div>
          <div className="flex-2 flex pt-4 gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-semibold">Company</p>
              <p className="opacity-50 ml-2 text-[20px] font-normal ">
                About Us
              </p>
              <p className="opacity-50 ml-3 text-[20px] font-normal ">
                How it Works
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[20px] font-semibold">链接</p>
              <p className="opacity-50 ml-2 text-[20px] font-normal ">
                创建账户
              </p>
              <p className="opacity-50 ml-3 text-[20px] font-normal ">登录</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-left mt-5  ">
            <div className="flex flex-col items-start gap-6 ">
              <p className="text-[20px] font-semibold">订阅我们的新闻通讯</p>
              <div className="w-[300px] rounded-[12px] border-[2px] p-3 opacity-10 ">
                <p className="  text-[16px] text-left px-2">电子邮件地址</p>
              </div>
              <div className="flex items-center ">
                <input type="checkbox" name="" id="" className="" />
                <p>By clicking here you agree to our terms & conditions</p>
              </div>
              <button className="bg-[#0177FB] font-semibold text-[16px] px-10 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[#2B2E4A] ">
          <div className="flex justify-between py-10 md:flex-row flex-col gap-4 items-center  ">
            <div className="text-center">
              <p className="opacity-50 text-[20px] ">
                cnrmarketplace © 2024 All Rights Reserved
              </p>
            </div>
            <div className="flex  md:gap-10 gap-5 items-center justify-center flex-col">
              <a href="#" className="opacity-50 text-[20px]">
                Terms & Conditions
              </a>
              <a href="#" className="opacity-50 text-[20px]">
                Privacy Policy
              </a>
              <a href="#" className="opacity-50 text-[20px]">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default w;
