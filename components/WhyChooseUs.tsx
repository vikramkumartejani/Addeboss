"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import One from "../app/assets/one.svg";
import Two from "../app/assets/two.svg";
import Three from "../app/assets/three.svg";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

 const slideData = [
  {
    icon: One,
    title: "低费用与透明定价",
    description:
      "我们提供具有竞争力的佣金率，没有隐藏费用，确保卖家保留更多利润。透明的定价结构让卖家清楚地知道期待什么。",
    bgColor: "bg-blue-600",
  },
  {
    icon: Two,
    title: "广泛的营销支持",
    description:
      "受益于我们专门的营销活动和特别策略，这些策略旨在为所有卖家驱动流量和增加销售。我们帮助触及那些通常无法发现你店铺的新受众。",
    bgColor: "bg-blue-600",
  },
  {
    icon: Three,
    title: "用户友好的卖家仪表板",
    description:
      "使用我们直观且功能丰富的卖家仪表板轻松管理你的店铺。实时销售跟踪、库存管理和订单处理都在一个地方完成。",
    bgColor: "bg-blue-600",
  },
  {
    icon: One,
    title: "用户友好的卖家仪表板",
    description:
      "使用我们直观且功能丰富的卖家仪表板轻松管理你的店铺。实时销售跟踪、库存管理和订单处理都在一个地方完成。",
    bgColor: "bg-blue-600",
  },
  {
    icon: One,
    title: "用户友好的卖家仪表板",
    description:
      "使用我们直观且功能丰富的卖家仪表板轻松管理你的店铺。实时销售跟踪、库存管理和订单处理都在一个地方完成。",
    bgColor: "bg-blue-600",
  },
  {
    icon: One,
    title: "用户友好的卖家仪表板",
    description:
      "使用我们直观且功能丰富的卖家仪表板轻松管理你的店铺。实时销售跟踪、库存管理和订单处理都在一个地方完成。",
    bgColor: "bg-blue-600",
  },
];

const WhyChooseUs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="py-10 sm:py-12 max-w-[1240px] mx-auto w-full px-5 relative">
      <h3 className="text-center text-[#141736] text-[30px] sm:text-[45px] leading-[46.88px] font-bold">
        为什么选择我们 ？
      </h3>
      <div className="mt-6 sm:mt-12">
        <div>
          <div className="w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {slideData.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="mt-[60px] sm:mt-[100px] h-full flex justify-center items-center relative"
                >
                  <div className="border border-[#B2C0DB66] rounded-[40px] flex flex-col min-h-[450px] h-full w-full items-center relative z-40">
                    <div className="p-2.5 bg-white rounded-full absolute -top-[60px] sm:-top-[85px] z-40">
                      <div className="sm:w-[136px] sm:h-[136px] w-[110px] h-[110px] bg-[#0177FB] rounded-full flex items-center justify-center p-3">
                        <Image src={slide.icon} alt="icon" />
                      </div>
                    </div>
                    <div className="bg-[#141736] rounded-t-[40px] w-full px-8 pb-[60px] pt-[84px] text-white">
                      <h3 className="text-[18px] sm:text-[24px] font-bold leading-[36px]">
                        {slide.title}
                      </h3>
                    </div>
                    <p className="pt-5 px-8 text-[#141736] text-[17px] sm:text-[20px] leading-[26px] sm:leading-[33px] font-normal text-left">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="sm:block hidden absolute top-[65%] left-2 xl:left-0 transform -translate-y-1/2 z-50">
              <button
                ref={prevRef}
                className="border rounded-full bg-white shadow-xl min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <IoIosArrowBack size={25} />
              </button>
            </div>
            <div className="sm:block hidden absolute top-[65%] right-2 xl:right-0 transform -translate-y-1/2 z-50">
              <button
                ref={nextRef}
                className="border rounded-full bg-white shadow-xl min-w-[40px] min-h-[40px] flex items-center justify-center"
              >
                <IoIosArrowForward size={25}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
