import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Help() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tutorials = [
    {
      title: "Windows 客户端安装与使用",
      description: "详细的Windows客户端安装步骤和基础使用教程",
      steps: [
        "访问下载页面，点击Windows版本下载",
        "双击安装文件，按照提示完成安装",
        "打开应用，使用账号登录",
        "选择加速节点，点击连接按钮",
        "等待连接成功，即可开始使用",
      ],
    },
    {
      title: "Mac 客户端安装与使用",
      description: "Mac用户的完整安装和使用指南",
      steps: [
        "下载Mac版本的DMG文件",
        "打开DMG文件，将应用拖入Applications文件夹",
        "打开应用，允许系统权限请求",
        "登录您的账号",
        "选择节点并连接",
      ],
    },
    {
      title: "iOS 应用安装与使用",
      description: "iPhone和iPad用户的安装指南",
      steps: [
        "打开App Store，搜索极光加速器",
        "点击获取，使用Face ID或Apple ID确认",
        "安装完成后打开应用",
        "使用账号登录",
        "选择节点，点击连接",
      ],
    },
    {
      title: "Android 应用安装与使用",
      description: "Android设备的完整使用教程",
      steps: [
        "打开Google Play Store或访问官网下载",
        "点击安装或下载APK文件",
        "允许应用权限请求",
        "登录您的账号",
        "选择加速节点并连接",
      ],
    },
  ];

  const faqs = [
    {
      question: "如何选择合适的加速节点？",
      answer:
        "我们建议根据您的使用场景选择节点。如果您需要访问特定地区的内容，可以选择该地区的节点。应用会自动推荐最快的节点，您也可以手动选择。通常来说，选择距离您最近的节点会获得最佳速度。",
    },
    {
      question: "为什么连接后速度还是很慢？",
      answer:
        "这可能有几个原因：1) 您的本地网络连接不稳定，请检查WiFi或宽带连接；2) 选择的节点负载过高，请尝试切换其他节点；3) 您的设备配置较低，可能影响性能。如果问题持续，请联系我们的客服团队。",
    },
    {
      question: "支持同时连接多少个设备？",
      answer:
        "这取决于您的套餐。基础版支持1个设备，专业版支持5个设备，高级版支持10个设备同时连接。您可以在账户设置中查看当前的连接数。",
    },
    {
      question: "如何更改账户密码？",
      answer:
        "登录应用后，进入设置 > 账户设置 > 修改密码。输入当前密码和新密码，然后点击保存。为了安全起见，建议定期更改密码。",
    },
    {
      question: "如何联系客服支持？",
      answer:
        "您可以通过多种方式联系我们：1) 在应用内点击帮助 > 联系客服；2) 发送邮件至support@auroraaccel.com；3) 访问我们的官网在线客服。我们的客服团队24/7为您服务。",
    },
    {
      question: "数据是否安全？",
      answer:
        "是的，我们使用军级AES-256加密技术保护您的数据。我们不记录任何用户的浏览历史或活动日志。您的隐私是我们最重要的优先事项。详细信息请查看我们的隐私政策。",
    },
    {
      question: "如何取消自动续费？",
      answer:
        "您可以在账户设置 > 订阅管理中查看和管理您的订阅。点击取消续费按钮即可。您也可以联系客服团队协助取消。",
    },
    {
      question: "可以在多个国家使用吗？",
      answer:
        "可以。极光加速器支持全球使用。无论您身在何处，都可以使用您的账号连接到我们的全球节点。但请注意，某些国家可能有特殊的网络政策，请遵守当地法律。",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✨</span>
              </div>
              <span className="text-xl font-bold text-gray-900">极光加速器</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition">
                首页
              </Link>
              <Link href="/discount" className="text-gray-700 hover:text-green-600 transition">
                折扣优惠
              </Link>
              <Link href="/help" className="text-green-600 font-semibold">
                帮助教程
              </Link>
              <Link href="/download" className="text-gray-700 hover:text-green-600 transition">
                下载客户端
              </Link>
            </div>

            <div className="hidden md:block">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                立即开始
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <Link href="/" className="block py-2 text-gray-700 hover:text-green-600">
                首页
              </Link>
              <Link href="/discount" className="block py-2 text-gray-700 hover:text-green-600">
                折扣优惠
              </Link>
              <Link href="/help" className="block py-2 text-green-600 font-semibold">
                帮助教程
              </Link>
              <Link href="/download" className="block py-2 text-gray-700 hover:text-green-600">
                下载客户端
              </Link>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                立即开始
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            帮助与教程
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            查找详细的使用指南、常见问题解答和客服支持。我们随时准备帮助您。
          </p>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            使用教程
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-6">{tutorial.description}</p>

                <div className="space-y-3">
                  {tutorial.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white text-sm font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                  查看详细教程
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            常见问题
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              还有其他问题？
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              我们的客服团队随时准备帮助您。无论您有任何问题，都可以通过以下方式联系我们。
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-gray-900 mb-2">在线客服</h3>
                <p className="text-gray-600 text-sm mb-4">
                  即时在线支持，快速解决问题
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  开始对话
                </Button>
              </div>
              <div>
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-bold text-gray-900 mb-2">邮件支持</h3>
                <p className="text-gray-600 text-sm mb-4">
                  support@auroraaccel.com
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  发送邮件
                </Button>
              </div>
              <div>
                <div className="text-4xl mb-4">🎧</div>
                <h3 className="font-bold text-gray-900 mb-2">电话支持</h3>
                <p className="text-gray-600 text-sm mb-4">
                  +86 400-123-4567
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  拨打电话
                </Button>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              我们的客服团队24/7为您服务，通常在24小时内回复所有邮件
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">极光加速器</h4>
              <p className="text-sm">
                提供全球最快的网络加速服务
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">下载客户端</a></li>
                <li><a href="#" className="hover:text-white transition">定价方案</a></li>
                <li><a href="#" className="hover:text-white transition">功能介绍</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">帮助</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">使用教程</a></li>
                <li><a href="#" className="hover:text-white transition">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">关于</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition">服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 极光加速器. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

