import { TrendingUp, DollarSign, BarChart3, Coins, Building2, Zap } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-[#aeff1c]" />,
      title: "Forex Trading",
      description: "Trade 60+ currency pairs with spreads from 0.0 pips and leverage up to 1:500. Access the world's largest financial market 24/5.",
      features: ["Major, Minor & Exotic Pairs", "Tight Spreads", "High Leverage"]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#aeff1c]" />,
      title: "Commodities",
      description: "Diversify your portfolio with precious metals, energy, and agricultural commodities. Hedge against inflation and market volatility.",
      features: ["Gold & Silver", "Oil & Gas", "Agricultural Products"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#aeff1c]" />,
      title: "Indices Trading",
      description: "Trade the world's major stock indices including S&P 500, NASDAQ, FTSE 100, and more with competitive leverage and tight spreads.",
      features: ["Global Indices", "Low Margins", "Extended Hours"]
    },
    {
      icon: <Coins className="w-12 h-12 text-[#aeff1c]" />,
      title: "Cryptocurrencies",
      description: "Trade popular cryptocurrencies like Bitcoin, Ethereum, and more with competitive spreads and secure execution.",
      features: ["Major Cryptos", "24/7 Trading", "Secure Platform"]
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#aeff1c]" />,
      title: "Stocks & Shares",
      description: "Access thousands of stocks from major global exchanges with fractional shares and zero commission trading.",
      features: ["Global Stocks", "Zero Commission", "Fractional Shares"]
    },
    {
      icon: <Zap className="w-12 h-12 text-[#aeff1c]" />,
      title: "CFD Trading",
      description: "Trade Contracts for Difference on various assets with leverage, allowing you to profit from both rising and falling markets.",
      features: ["Leveraged Trading", "Short & Long", "Multiple Assets"]
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#104042] mb-6">
            Our Trading Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive trading solutions designed to help you succeed in today's dynamic financial markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#104042] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-[#aeff1c] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection