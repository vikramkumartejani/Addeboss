'use client'
import Image from 'next/image';
import React,{useState} from 'react';
import MinusIcon from '../app/assets/minus.svg'
import PlusIcon from '../app/assets/plus.svg'

type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "我可以在 CNRMarketplace 上销售哪些类型的产品？",
      answer: "CNRMarketplace 专为高质量仿品的卖家设计。你可以列出各种产品，从时尚和配饰到电子产品，只要它们符合我们的质量标准。"
    },
    {
      question: "我可以将其他平台上的现有产品列表导入到 CNR Marketplace 吗？",
      answer: " 是的，您可以将现有的产品导入我们的商店！我们为您准备了一切，帮助您快速开始！"
    },
    {
      question: "提现我的收益有哪些支付选项？",
      answer: "您可以通过多种付款方式提现，包括银行转账和PayPal。请告诉我们您具体想使用的付款方式"
    },
    {
      question: "我如何在 CNRMarketplace 上接触到国际客户？",
      answer: "凭借我们在营销、搜索引擎优化策略以及对海外市场和客户的整体经验，您可以保证通过我们的网站，您的业务将通过我们精心制定的营销策略获得大量流量。"
    },
    {
      question: "在 CNR Marketplace 上销售是否免费？",
      answer: "目前，在 CNR-Marketplace 注册是完全免费的！"
    }
  ];
  
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number): void => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    < >
        <div id='faq' className='bg-[#141736] w-full py-12 px-3'>
            <div className='w-full max-w-[1220px] mx-auto pb-[175px]'>
                <div className='flex items-center gap-5 md:gap-[99px]'>
                    <h3 className='text-white text-[16px] sm:text-[20px] font-bold leading-[36px]'>常见问题解答</h3>
                    <div className='bg-[#FFFFFF] max-w-[187px] sm:max-w-[298px] w-full h-[3px] bg-opacity-10'>
                        <div className='bg-[#2A9CF5] w-[97px] h-[3px]'></div>
                    </div>
                </div>
                <h2 className='text-white text-[24px] sm:text-[30px] font-bold leading-[36px] sm:leading-[46px] my-2.5'>解答你的疑问。</h2>
                <p className='w-full sm:w-[476px] text-[#FFFFFF80] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[27px] font-normal'> 有关更多详细信息，请访问我们的常见问题解答页面。</p>
            </div>
        </div>
        <div className='px-3'>
            <div className='-mt-[200px] w-full max-w-[1220px] mx-auto bg-white px-4 py-6 md:p-10 rounded-[25px] md:rounded-[32px] border border-[#B2C0DB66]'>
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="margin-bottom custom-border border-opacity-10">
                            <div className="flex justify-between items-center cursor-pointer gap-5" onClick={() => toggleFAQ(index)}>
                                <h3 className="text-lg md:text-2xl leading-[39px] md:leading-[46px] font-semibold text-[#141736]">{faq.question}</h3>
                                <span className="min-w-[20px] text-xl font-bold">
                                    {activeIndex === index ? (
                                    <Image src={MinusIcon} alt="minus" width={20} height={20} />
                                    ) : (
                                    <Image src={PlusIcon} alt="plus" width={20} height={20} />
                                    )}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <p className="mt-2 text-base md:text-xl leading-[23px] md:leading-[27px] text-[#141736] pr-4 opacity-70 font-normal">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default FAQ;
