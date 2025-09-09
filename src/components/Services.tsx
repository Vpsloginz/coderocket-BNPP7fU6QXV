import { TrendingUp, DollarSign, BarChart3, Shield, Smartphone, Globe, Clock, Award } from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#104042]" />,
      title: "Forex Trading",
      description: "Trade 60+ currency pairs with spreads from 0.0 pips. Access major, minor, and exotic pairs with up to 1:500 leverage.",
      features: ["Major pairs from 0.8 pips", "24/5 market access", "Expert advisors supported"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#104042]" />,
      title: "Commodities",
      description: "Diversify with gold, silver, oil, and agricultural products. Hedge against inflation with precious metals trading.",
      features: ["Gold from 2.5 pips", "Oil & energy markets", "Agricultural futures"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#104042]" />,
      title: "Stock Indices",
      description: "Trade global indices including S&P 500, NASDAQ, FTSE 100, and DAX with competitive spreads and leverage.",
      features: ["US & European indices", "Asian market access", "Fractional trading available"]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#104042]" />,
      title: "Cryptocurrency CFDs",
      description: "Trade Bitcoin, Ethereum, and 20+ cryptocurrencies with the ability to go long or short on price movements.",
      features: ["24/7 crypto trading", "Long & short positions", "No wallet required"]
    }
  ]

  const additionalServices = [
    {
      icon: <Smartphone className="w-6 h-6 text-[#aeff1c]" />,
      title: "Mobile Trading",
      description: "Trade anywhere with our award-winning mobile apps for iOS and Android"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#aeff1c]" />,
      title: "Global Markets",
      description: "Access markets worldwide with multi-language support and local regulations"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#aeff1c]" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support in multiple languages"
    },
    {
      icon: <Award className="w-6 h-6 text-[#aeff1c]" />,
      title: "Education Center",
      description: "Free webinars, tutorials, and market analysis to improve your trading"
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Trading Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive trading solutions designed to help you succeed in today's dynamic financial markets
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow group">
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#aeff1c] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Additional Services & Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#104042] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Trading?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Open your account today and get access to all our trading services with competitive spreads and professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold px-8 py-4 rounded-full transition-colors">
              Open Live Account
            </button>
            <button className="border-2 border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white font-bold px-8 py-4 rounded-full transition-colors">
              Try Demo Account
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services