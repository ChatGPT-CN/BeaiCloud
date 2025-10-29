import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, CheckCircle, Zap } from "lucide-react";
import { Link } from "wouter";

export default function DownloadPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const downloads = [
    {
      platform: "Windows",
      icon: "🪟",
      description: "Windows 7 及以上版本",
      version: "v2.5.1",
      fileSize: "45.2 MB",
      downloads: "1.2M+",
      links: [
        { name: "官方下载", url: "#" },
        { name: "备用下载", url: "#" },
      ],
    },
    {
      platform: "Mac",
      icon: "🍎",
      description: "macOS 10.12 及以上版本",
      version: "v2.5.1",
      fileSize: "52.8 MB",
      downloads: "850K+",
      links: [
        { name: "App Store", url: "#" },
        { name: "官方下载", url: "#" },
      ],
    },
    {
      platform: "iOS",
      icon: "📱",
      description: "iOS 12.0 及以上版本",
      version: "v2.5.1",
      fileSize: "38.5 MB",
      downloads: "650K+",
      links: [
        { name: "App Store", url: "#" },
      ],
    },
    {
      platform: "Android",
      icon: "🤖",
      description: "Android 5.0 及以上版本",
      version: "v2.5.1",
      fileSize: "42.1 MB",
      downloads: "1.5M+",
      links: [
        { name: "Google Play", url: "#" },
        { name: "官方下载", url: "#" },
      ],
    },
  ];

  const features = [
    {
      title: "快速安装",
      description: "轻量级安装包，快速完成安装过程",
      icon: "⚡",
    },
    {
      title: "自动更新",
      description: "自动检查并安装最新版本，无需手动更新",
      icon: "🔄",
    },
    {
      title: "多语言支持",
      description: "支持中文、英文、日文等多种语言",
      icon: "🌍",
    },
    {
      title: "低资源占用",
      description: "轻量级应用，不占用过多系统资源",
      icon: "💾",
    },
  ];

  const systemRequirements = [
    {
      os: "Windows",
      requirements: [
        "操作系统：Windows 7 或更高版本",
        "处理器：Intel 或 AMD 1GHz 或更快",
        "内存：512 MB RAM 或更多",
        "硬盘空间：50 MB 可用空间",
      ],
    },
    {
      os: "Mac",
      requirements: [
        "操作系统：macOS 10.12 或更高版本",
        "处理器：Intel 或 Apple Silicon",
        "内存：512 MB RAM 或更多",
        "硬盘空间：60 MB 可用空间",
      ],
    },
    {
      os: "iOS",
      requirements: [
        "操作系统：iOS 12.0 或更高版本",
        "设备：iPhone、iPad 或 iPod Touch",
        "内存：40 MB 可用空间",
      ],
    },
    {
      os: "Android",
      requirements: [
        "操作系统：Android 5.0 或更高版本",
        "处理器：ARM 或 x86",
        "内存：50 MB 可用空间",
      ],
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
              <Link href="/help" className="text-gray-700 hover:text-green-600 transition">
                帮助教程
              </Link>
              <Link href="/download" className="text-green-600 font-semibold">
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
              <Link href="/help" className="block py-2 text-gray-700 hover:text-green-600">
                帮助教程
              </Link>
              <Link href="/download" className="block py-2 text-green-600 font-semibold">
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
            下载极光加速器
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择您的设备，立即下载极光加速器。支持Windows、Mac、iOS和Android。
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {downloads.map((download, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl mb-4">{download.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {download.platform}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {download.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>版本：</span>
                    <span className="font-semibold text-gray-900">
                      {download.version}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>文件大小：</span>
                    <span className="font-semibold text-gray-900">
                      {download.fileSize}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>下载量：</span>
                    <span className="font-semibold text-gray-900">
                      {download.downloads}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {download.links.map((link, idx) => (
                    <Button
                      key={idx}
                      className={`w-full py-6 ${
                        idx === 0
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {link.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            应用特性
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            系统要求
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {systemRequirements.map((req, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">
                    {downloads[index]?.icon}
                  </span>
                  {req.os}
                </h3>

                <ul className="space-y-3">
                  {req.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            安装步骤
          </h2>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                    1
                  </span>
                  下载应用
                </h3>
                <p className="text-gray-600 ml-11">
                  选择您的设备类型，点击下载按钮。应用会自动下载到您的设备。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                    2
                  </span>
                  安装应用
                </h3>
                <p className="text-gray-600 ml-11">
                  双击下载的文件或按照系统提示进行安装。整个过程通常只需要几分钟。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                    3
                  </span>
                  创建账号或登录
                </h3>
                <p className="text-gray-600 ml-11">
                  打开应用后，使用您的邮箱创建新账号或登录现有账号。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                    4
                  </span>
                  选择节点并连接
                </h3>
                <p className="text-gray-600 ml-11">
                  在应用中选择您想要连接的加速节点，点击连接按钮即可开始使用。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">
                    5
                  </span>
                  开始享受加速
                </h3>
                <p className="text-gray-600 ml-11">
                  连接成功后，您就可以开始享受极速网络体验了。祝您使用愉快！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            常见问题
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "下载是免费的吗？",
                a: "是的，应用下载完全免费。您只需在使用付费功能时才需要购买套餐。",
              },
              {
                q: "应用支持多少种语言？",
                a: "我们的应用支持中文、英文、日文、韩文等多种语言，您可以在设置中切换语言。",
              },
              {
                q: "下载后需要激活吗？",
                a: "不需要。下载并安装后，直接使用您的账号登录即可使用。",
              },
              {
                q: "可以在多个设备上安装吗？",
                a: "可以。您可以在多个设备上安装应用，但同时连接的设备数受您的套餐限制。",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好了吗？
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            立即下载极光加速器，开始您的加速之旅。首月享受50%优惠！
          </p>
          <Button className="bg-white hover:bg-gray-100 text-green-600 text-base py-6 px-8">
            <Download className="w-5 h-5 mr-2" />
            立即下载
          </Button>
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

