import { TrendingUp, DollarSign, BarChart3, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#104042]" />,
      title: "Forex",
      description: "Trade major currency pairs with tight spreads and fast execution. Access the world's largest financial market 24/5."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#104042]" />,
      title: "Commodities",
      description: "Diversify your portfolio with gold, oil, and other precious metals. Hedge against inflation and market volatility."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#104042]" />,
      title: "Indices",
      description: "Trade the world's major stock indices including S&P 500, NASDAQ, and FTSE 100 with competitive leverage."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#104042]" />,
      title: "Risk Management",
      description: "Advanced risk management tools to protect your capital and maximize your trading potential."
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive trading solutions designed to help you succeed in today's dynamic markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services