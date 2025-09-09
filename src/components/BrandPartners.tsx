import { TrendingUp } from 'lucide-react'

const BrandPartners = () => {
  const partners = [
    { name: "MetaTrader 4", logo: "MT4" },
    { name: "MetaTrader 5", logo: "MT5" },
    { name: "TradingView", logo: "TV" },
    { name: "Reuters", logo: "R" },
    { name: "Bloomberg", logo: "B" },
    { name: "Refinitiv", logo: "RF" }
  ]

  const stats = [
    { number: "770,000+", label: "Active Traders" },
    { number: "$2.5B+", label: "Monthly Volume" },
    { number: "100+", label: "Trading Instruments" },
    { number: "0.1s", label: "Avg Execution Speed" }
  ]

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#104042] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted Technology Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with industry-leading technology providers to deliver the best trading experience
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-gray-600">{partner.logo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-8 h-8 text-[#aeff1c]" />
              <div>
                <div className="font-bold text-gray-900">15+ Years</div>
                <div className="text-sm text-gray-600">Market Experience</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-[#aeff1c] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">A+</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">Regulated</div>
                <div className="text-sm text-gray-600">Global Compliance</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-[#104042] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">24/7</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">Support</div>
                <div className="text-sm text-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandPartners