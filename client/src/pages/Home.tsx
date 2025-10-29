import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Zap, Globe, Shield, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "一键连接",
      description: "极速连接，一键启动，无需复杂配置，即刻享受加速体验",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "网络无界",
      description: "覆盖全球200+节点，随时随地访问全球内容，无地域限制",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "安全加密",
      description: "军级加密保护，隐私安全有保障，数据传输无忧虑",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "无限平台",
      description: "支持Windows、Mac、iOS、Android等多平台，一账号全覆盖",
    },
  ];

  const testimonials = [
    {
      name: "张先生",
      role: "商务人士",
      content: "极光加速器让我的工作效率提升了50%，稳定性非常好！",
      avatar: "👨‍💼",
    },
    {
      name: "李女士",
      role: "内容创作者",
      content: "速度快，延迟低，完全满足我的直播需求，强烈推荐！",
      avatar: "👩‍🎨",
    },
    {
      name: "王先生",
      role: "学生",
      content: "价格实惠，使用体验很好，客服也很耐心，5星好评！",
      avatar: "👨‍🎓",
    },
  ];

  const platforms = [
    { name: "Windows", icon: "🪟" },
    { name: "Mac", icon: "🍎" },
    { name: "iOS", icon: "📱" },
    { name: "Android", icon: "🤖" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✨</span>
              </div>
              <span className="text-xl font-bold text-gray-900">极光加速器</span>
            </div>

            {/* Desktop Menu */}
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
              <Link href="/download" className="text-gray-700 hover:text-green-600 transition">
                下载客户端
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                立即开始
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                极速加速，
                <span className="text-green-600">畅享全球</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                极光加速器采用最先进的加速技术，为您提供稳定、快速、安全的网络体验。无论您身在何处，都能轻松访问全球内容。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white text-base py-6">
                  立即下载
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="text-base py-6 border-green-600 text-green-600 hover:bg-green-50">
                  了解更多
                </Button>
              </div>
              <div className="mt-8 flex gap-6 text-sm text-gray-600">
                <div>
                  <div className="font-bold text-gray-900">200+</div>
                  <div>全球加速节点</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">99.9%</div>
                  <div>服务可用性</div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">500K+</div>
                  <div>活跃用户</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-4">📱</div>
                      <p className="text-lg font-semibold">极光加速器</p>
                      <p className="text-sm opacity-90">跨平台客户端</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择极光加速器
            </h2>
            <p className="text-lg text-gray-600">
              我们提供业界领先的加速技术和优质的用户体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors group"
              >
                <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              用户评价
            </h2>
            <p className="text-lg text-gray-600">
              来自全球用户的真实反馈
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              支持多平台
            </h2>
            <p className="text-lg text-gray-600">
              一个账号，全平台使用
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors text-center group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {platform.icon}
                </div>
                <h3 className="font-bold text-gray-900">{platform.name}</h3>
                <p className="text-sm text-gray-600 mt-2">立即下载</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好加速了吗？
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            立即下载极光加速器，体验极速网络，享受全球无界。首月优惠50%，不容错过！
          </p>
          <Button className="bg-white hover:bg-gray-100 text-green-600 text-base py-6 px-8">
            立即开始免费试用
            <ChevronRight className="w-5 h-5 ml-2" />
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

