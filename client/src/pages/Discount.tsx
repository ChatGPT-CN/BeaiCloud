import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function Discount() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "基础版",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      description: "适合个人用户",
      features: [
        "200+ 全球加速节点",
        "1 个设备同时连接",
        "基础加速技术",
        "邮件客服支持",
        "无限流量",
      ],
      popular: false,
    },
    {
      name: "专业版",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      description: "最受欢迎",
      features: [
        "200+ 全球加速节点",
        "5 个设备同时连接",
        "高级加速技术",
        "优先客服支持",
        "无限流量",
        "专属加速线路",
        "广告过滤",
      ],
      popular: true,
    },
    {
      name: "高级版",
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      description: "为专业人士设计",
      features: [
        "200+ 全球加速节点",
        "10 个设备同时连接",
        "顶级加速技术",
        "24/7 专属客服",
        "无限流量",
        "专属加速线路",
        "广告过滤",
        "优先级加速",
        "自定义节点",
      ],
      popular: false,
    },
  ];

  const discounts = [
    {
      title: "新用户优惠",
      description: "首月享受50%折扣",
      code: "NEW50",
      validity: "仅限新用户，首次购买有效",
    },
    {
      title: "年度套餐优惠",
      description: "按年购买享受30%折扣",
      code: "YEARLY30",
      validity: "全年有效",
    },
    {
      title: "学生优惠",
      description: "凭学生证享受40%折扣",
      code: "STUDENT40",
      validity: "需验证学生身份",
    },
    {
      title: "推荐朋友优惠",
      description: "每推荐一个朋友，双方各得20%折扣",
      code: "REFER20",
      validity: "无限制推荐",
    },
  ];

  const getPrice = (monthlyPrice: number, yearlyPrice: number) => {
    if (billingCycle === "monthly") {
      return monthlyPrice;
    } else {
      return yearlyPrice;
    }
  };

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
              <Link href="/discount" className="text-green-600 font-semibold">
                折扣优惠
              </Link>
              <Link href="/help" className="text-gray-700 hover:text-green-600 transition">
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
              <Link href="/discount" className="block py-2 text-green-600 font-semibold">
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

      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            透明的价格，
            <span className="text-green-600">超值的选择</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            选择适合您的套餐，享受优质的加速服务。所有套餐都包含无限流量和全球节点访问。
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                billingCycle === "monthly"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              按月计费
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-semibold transition relative ${
                billingCycle === "yearly"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              按年计费
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                省30%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-br from-green-600 to-green-700 text-white shadow-2xl scale-105"
                    : "bg-gray-50 border border-gray-200 hover:border-green-600"
                }`}
              >
                {plan.popular && (
                  <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    最受欢迎
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-green-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    ¥{getPrice(plan.monthlyPrice, plan.yearlyPrice).toFixed(2)}
                  </span>
                  <span className={`text-sm ml-2 ${plan.popular ? "text-green-100" : "text-gray-600"}`}>
                    {billingCycle === "monthly" ? "/月" : "/年"}
                  </span>
                </div>

                <Button
                  className={`w-full mb-8 py-6 ${
                    plan.popular
                      ? "bg-white text-green-600 hover:bg-gray-100"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  立即购买
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-green-100" : "text-green-600"}`} />
                      <span className={plan.popular ? "text-green-50" : "text-gray-700"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Discounts */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              特别优惠活动
            </h2>
            <p className="text-lg text-gray-600">
              使用优惠码享受额外折扣
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {discounts.map((discount, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-600 transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {discount.title}
                </h3>
                <p className="text-green-600 font-semibold text-lg mb-4">
                  {discount.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
                  <span className="text-gray-600">优惠码：</span>
                  <code className="text-lg font-bold text-green-600 bg-white px-4 py-2 rounded border border-green-600">
                    {discount.code}
                  </code>
                </div>
                <p className="text-sm text-gray-600">
                  {discount.validity}
                </p>
              </div>
            ))}
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
                q: "可以随时升级或降级套餐吗？",
                a: "可以。您可以随时升级或降级套餐，费用将按比例调整。",
              },
              {
                q: "支持哪些付款方式？",
                a: "我们支持支付宝、微信支付、银行卡和国际信用卡等多种付款方式。",
              },
              {
                q: "有退款保证吗？",
                a: "是的，我们提供30天无条件退款保证。如果您不满意，可以全额退款。",
              },
              {
                q: "套餐是否自动续费？",
                a: "是的，套餐到期前7天我们会发送续费提醒。您可以随时取消自动续费。",
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
            选择适合您的套餐
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            立即升级，享受更快的速度和更多的功能。所有套餐都支持30天退款保证。
          </p>
          <Button className="bg-white hover:bg-gray-100 text-green-600 text-base py-6 px-8">
            查看所有套餐
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

