import { Button } from './ui/button'
import { Smartphone, Monitor, Tablet } from 'lucide-react'

const TradingPlatforms = () => {
  const platforms = [
    {
      icon: <Monitor className="w-12 h-12 text-[#aeff1c]" />,
      title: "MetaTrader 5",
      description: "The world's most popular trading platform with advanced charting and analysis tools.",
      features: ["Advanced Charting", "Expert Advisors", "Market Depth", "Economic Calendar"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#aeff1c]" />,
      title: "Mobile Trading",
      description: "Trade on the go with our powerful mobile apps for iOS and Android devices.",
      features: ["Real-time Quotes", "One-click Trading", "Push Notifications", "Touch ID Security"]
    },
    {
      icon: <Tablet className="w-12 h-12 text-[#aeff1c]" />,
      title: "Web Platform",
      description: "Access your account from any browser without downloading software.",
      features: ["No Download Required", "Cross-platform", "Real-time Data", "Secure Trading"]
    }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#104042] mb-6">
            Trading Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional trading platforms designed for every trading style
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#104042] mb-4">
                {platform.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {platform.description}
              </p>
              <ul className="space-y-2 mb-6">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-[#aeff1c] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-[#104042] hover:bg-[#0d3335] text-white">
                Download Platform
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold px-8 py-4 text-lg rounded-full">
            Try Demo Account
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TradingPlatforms