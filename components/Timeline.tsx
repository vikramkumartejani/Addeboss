import Image from "next/image";
import Arrow from '../app/assets/arrow.svg'

export default function Timeline() {
  const timelineItems = [
    {
      title: "吸引客户的一体化解决方案",
      description:
        "告别分散的销售渠道。使用 CNR Marketplace， 你可以在一个方便的地方管理所有的产品列表、 交易和客户互动。无需在 Yupoo、微信、WhatsApp、 淘宝、微店或代理网站等多个平台之间切换。CNR Marketplace 将一切整合到一起。这种无缝集成消除 了客户讨厌的复杂性和挫败感，使新客户能够轻松 了解行业并迅速开始购买",
    },
    {
      title: "你与全球观众之间的桥梁",
      description:
        "作为这一领域的专家，我们积累了对中国市场和国际 客户的丰富经验。让我们帮助你拓展超越本地市场的 影响力，与那些积极寻找高质量仿品的国际买家建立联系。我们强大的营销策略、SEO优化以及作为该行业 唯一的平台，确保你的产品能被全球观众轻松发现。",
    },
    {
      title: "简化的销售流程",
      description:
        "我们简化了销售流程，让你可以专注于你最擅长的事 情——创造和采购优质产品。如果需要，我们的团队随 时准备帮助你将已有的产品从其他平台导入到 CNR Marketplace。我们直观的平台使你能够轻松地列出 商品、管理库存和处理订单，无需烦恼。",
    },
    {
      title: "安全与隐私",
      description:
        "保护你的业务和个人信息是我们的首要任务。我们的 安全平台确保你的数据保持私密，我们的强大安全措 施防止未经授权的访问。此外，我们处理所有合规问 题，你无需担心政府干预。",
    },
    {
      title: "鼓励直接发货",
      description:
        "客户关系在这个行业中常被忽视。我们鼓励卖家与买 家建立直接的关系，提供直接发货的选项。这促进了 卖家与客户之间的紧密联系，减少了对第三方代理的需求。直接与客户接触，你可以建立忠诚度，提供更好 的整体体验，并建立积极的声誉。",
    },
    {
      title: "自动化履行选项（即将推出）",
      description:
        "对于那些喜欢使用代理的人，我们提供自动化代理连 接的灵活性。这确保了你的客户能够快速高效地收到订单，同时让你仍然能够有效地管理你的业务。",
    },
    {
      title: "无限提款",
      description:
        " 无需限制或担忧地提取你的收益。我们的平台确保你 随时可以访问你的资金，提供财务灵活性和安心。",
    },
    {
      title: "专属支持",
      description:
        "利用我们快速响应的客户支持团队，随时为你解答任 何疑问或解决问题。我们致力于帮助你在 CNRMarket 上成功并发展你的业务。",
    },
    {
      title: "与客户建立直接关系",
      description:
        "在 CNRMarket，我们相信赋能卖家建立强大而持久的客户关系。我们的平台旨在促进卖家与买家之间的直接互动，确保提供个性化和引人入胜的购物体验。",
    },
    {
      title: "直接沟通",
      description:
        "我们的集成消息和询问系统允许卖家直接与买家沟通， 解答问题、提供更新，并建立信任。这条直接的沟通 渠道帮助你更好地了解客户的需求和偏好。",
    },
    {
      title: "数据驱动的洞察",
      description:
        "获取关于业务表现的可操作洞察。我们提供详细的分析，帮助你了解哪些方面有效、哪些方面无效，让你做出明 智的决策，推动业务增长。开始像专业人士一样运营， 让你从人群中脱颖而出。",
    },
    {
      title: "通过我们的应用程序随时随地管理你的店铺",
      description:
        "我们的店铺管理应用程序让你可以直接从手机上控制你的业务。享受实时更新、轻松的库存管理和无缝的订单处理。即时与客户沟通，访问详细的分析数据以推动增长。凭借用户友好的界面，店铺管理从未如此方便。",
    },
    {
      title: "品牌识别",
      description:
        "通过创建一致且积极的客户体验，建立和发展你的品牌 身份。直接关系让你能够展示你的独特卖点，并与竞争 对手区分开来。",
    },
  ];

  return (
    <div className="ml-6 md:ml-0">
      <div className="relative border-l-2 border-[#141736] border-dashed border-opacity-10">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-5 md:mb-8 ml-2.5 sm:ml-4 md:ml-6">
            <span className="absolute flex items-center justify-center w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] md:w-12 md:h-12 bg-[#2A9CF5] rounded-full -left-4 sm:-left-5 md:-left-6">
              <Image src={Arrow} alt="Arrow" className="sm:w-[20px] w-[13px] sm:h-[15px]" />
            </span>
            <div className="px-4 bg-white rounded-lg">
              <h3 className="sm:mb-1 font-bold text-[#141736] text-[15px] sm:text-[20px] lg:text-[24px] leading-[30px] md:leading-[46px]">{item.title}</h3>
              <p className="text-[#141736] opacity-70 text-[13px] sm:text-[18px] lg:text-[20px] font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
