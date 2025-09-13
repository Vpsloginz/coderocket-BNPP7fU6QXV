import { Button } from '../components/ui/button'
import { CheckCircle, Users, TrendingUp, Crown, Star } from 'lucide-react'
const Accounts = () => {
  const accountTypes = [
    {
      name: "Starter Account",
      minDeposit: "$250",
      icon: <Users className="w-8 h-8 text-[#aeff1c]" />,
      features: [
        "Basic trading platform access",
        "Email support",
        "Educational resources",
        "Standard spreads from 1.2 pips",
        "Mobile trading app",
        "Leverage up to 1:100"
      ],
      popular: false,
      description: "Perfect for beginners starting their trading journey"
    },
    {
      name: "Professional Account",
      minDeposit: "$2,500",
      icon: <TrendingUp className="w-8 h-8 text-[#aeff1c]" />,
      features: [
        "Advanced trading platform",
        "Priority phone support",
        "Personal account manager",
        "Reduced spreads from 0.8 pips",
        "Advanced charting tools",
        "Market analysis reports",
        "Leverage up to 1:200"
      ],
      popular: true,
      description: "Ideal for experienced traders seeking better conditions"
    },
    {
      name: "VIP Account",
      minDeposit: "$25,000",
      icon: <Crown className="w-8 h-8 text-[#aeff1c]" />,
      features: [
        "Premium trading platform",
        "24/7 dedicated support",
        "Senior account manager",
        "Lowest spreads from 0.0 pips",
        "Exclusive market insights",
        "Custom trading solutions",
        "Priority execution",
        "Leverage up to 1:500"
      ],
      popular: false,
      description: "Premium service for high-volume traders"
    },
    {
      name: "Managed Account",
      minDeposit: "$50,000",
      icon: <Star className="w-8 h-8 text-[#aeff1c]" />,
      features: [
        "Professional fund management",
        "Dedicated portfolio manager",
        "Customized trading strategies",
        "Monthly performance reports",
        "Risk management protocols",
        "Direct manager communication",
        "Institutional-grade execution",
        "Transparent fee structure"
      ],
      popular: false,
      description: "Let our experts manage your portfolio professionally"
    }
  ]
  return (
    <main className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Trading Account
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the account type that best fits your trading experience and investment goals. 
            All accounts come with our award-winning platform and dedicated support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {accountTypes.map((account, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 ${
                account.popular ? 'border-[#aeff1c] shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              {account.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#aeff1c] text-black px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {account.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{account.name}</h3>
                <div className="text-3xl font-bold text-[#104042] mb-2">{account.minDeposit}</div>
                <p className="text-gray-600 text-sm">Minimum deposit</p>
                <p className="text-gray-500 text-sm mt-2 italic">{account.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {account.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#aeff1c] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  account.popular 
                    ? 'bg-[#aeff1c] hover:bg-[#9ee619] text-black' 
                    : 'bg-[#104042] hover:bg-[#0d3335] text-white'
                } font-bold py-3`}
              >
                Open {account.name}
              </Button>
            </div>
          ))}
        </div>
        {/* Managed Account Details */}
        <div className="bg-gradient-to-r from-[#104042] to-[#0d3335] rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <Star className="w-16 h-16 text-[#aeff1c] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Professional Portfolio Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let our experienced fund managers handle your investments with proven strategies and risk management protocols.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#aeff1c] mb-2">12.8%</div>
              <div className="text-gray-300">Average Annual Return</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#aeff1c] mb-2">5+ Years</div>
              <div className="text-gray-300">Manager Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#aeff1c] mb-2">24/7</div>
              <div className="text-gray-300">Portfolio Monitoring</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which account is right for you?
          </h2>
          <p className="text-gray-600 mb-6">
            Our account specialists are here to help you choose the perfect trading account based on your needs and investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#104042] hover:bg-[#0d3335] text-white">
              Speak with an Expert
            </Button>
            <Button variant="outline" className="border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white">
              Compare All Accounts
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Accounts