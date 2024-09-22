import Image from "next/image";
import React, { useState, useEffect } from "react";
import block from "../app/assets/block.svg";
import Timer from "../app/assets/Timer.svg";
import Read from '../app/assets/Read.svg';
import Right from '../app/assets/right.svg';
import Left from '../app/assets/left.svg';

const Sell = () => {
  const slides = [
    {
      id: 1,
      icon: block,
      title: "平台限制",
      description:
        "许多电子商务平台（如淘宝、 微店、1688 等）禁止销售仿品。为什么要浪费时间使用那些不适合 你的行业或潜在国际客户的平台，而 CNR Marketplace 可以提供全力 支持并带来客户呢？",
    },
    {
      id: 2,
      icon: Timer,
      title: "不断关闭店铺",
      description:
        "你是否厌倦了因为担心业务被扣押或平台封禁账户而不断关闭在线商店，然后重新创建一个新名称的商店？接着再次开始营销以吸引旧客户而不是新客户？这一整个过程不应该占用你宝贵的时间。使用 CNR Marketplace，这将不再是困扰你的问题。",
    },
    {
      id: 3,
      icon: Read,
      title: "隐私问题",
      description:
        "您的业务在我们这里是安全的。保护个人和商业信息免受当局和其他实体的侵害是卖家的重要关切。我们将确保您在安全无忧的环境中进行业务。",
    },
    {
      id: 4,
      icon: Read,
      title: "隐私问题",
      description:
        "您的业务在我们这里是安全的。保护个人和商业信息免受当局和其他实体的侵害是卖家的重要关切。我们将确保您在安全无忧的环境中进行业务。",
    },
    {
      id: 5,
      icon: Read,
      title: "隐私问题",
      description:
        "您的业务在我们这里是安全的。保护个人和商业信息免受当局和其他实体的侵害是卖家的重要关切。我们将确保您在安全无忧的环境中进行业务。",
    },
    {
      id: 6,
      icon: Read,
      title: "隐私问题",
      description:
        "您的业务在我们这里是安全的。保护个人和商业信息免受当局和其他实体的侵害是卖家的重要关切。我们将确保您在安全无忧的环境中进行业务。",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default for large screens

  // Adjust the number of visible slides based on the screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1); // small screens
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2); // medium screens
      } else {
        setVisibleSlides(3); // large screens
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide + visibleSlides) % slides.length
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - visibleSlides : prevSlide - visibleSlides
    );
  };

  // Calculate the slides to show based on the current slide and visible slides
  const slidesToShow = slides.slice(
    currentSlide,
    currentSlide + visibleSlides
  );

  return (
    <div className="w-full p-12">
      <div className="max-w-[1440px] m-auto">
        <h1 className="text-[45px] font-[700] text-center">
          为什么在 CNRMarketplace 上销售是显而易见的选择？
        </h1>
        <div className="p-8 border border-[#B2C0DB66] rounded-[20px] mt-10 ">
          <div className="flex justify-end gap-7 mb-10 ">
            <button onClick={handlePrevSlide}>
              <Image src={Right} alt="Previous" width={24} />
            </button>
            <button onClick={handleNextSlide}>
              <Image src={Left} alt="Next" width={24} />
            </button>
          </div>
          <div className="flex justify-between">
            {slidesToShow.map((slide) => (
              <div key={slide.id} className="flex flex-col gap-3 items-center w-full">
                <div className="border-none rounded-[20px] bg-[#0177FB] w-[94px] h-[94px] flex items-center justify-center">
                  <Image src={slide.icon} alt={slide.title} width={36} height={36} />
                </div>
                <p className="font-[700] text-[24px]">{slide.title}</p>
                <p className="font-[400] text-[20px] max-w-[302px] opacity-70 mt-2 text-center">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
