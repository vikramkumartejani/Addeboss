import { FaCheckCircle } from "react-icons/fa";

export default function Timeline() {
  const timelineItems = [
    {
      title: "吸引客户的一体化解决方案",
      description:
        "案例说明...",
    },
    {
      title: "你与全球观众之间的桥梁",
      description:
        "作为这一领域的领导者...",
    },
    {
      title: "简化的销售流程",
      description:
        "我们简化了销售流程...",
    },
    {
      title: "安全与隐私",
      description:
        "保存客户和个人信息是我们首要任务...",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="relative border-l-2 border-blue-600">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4">
              <FaCheckCircle className="text-white" />
            </span>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
