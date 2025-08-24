import { Button } from '../components/ui/button'
import { CheckCircle } from 'lucide-react'

const Accounts = () => {
  const accountTypes = [
    {
      name: "Starter Account",
      minDeposit: "$250",
      features: [
        "Basic trading platform access",
        "Email support",
        "Educational resources",
        "Standard spreads",
        "Mobile trading app"
      ],
      popular: false
    },
    {
      name: "Professional Account",
      minDeposit: "$2,500",
      features: [
        "Advanced trading platform",
        "Priority phone support",
        "Personal account manager",
        "Reduced spreads",
        "Advanced charting tools",
        "Market analysis reports"
      ],
      popular: true
    },
    {
      name: "VIP Account",
      minDeposit: "$25,000",
      features: [
        "Premium trading platform",
        "24/7 dedicated support",
        "Senior account manager",
        "Lowest spreads",
        "Exclusive market insights",
        "Custom trading solutions",
        "Priority execution"
      ],
      popular: false
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {accountTypes.map((account, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-lg border-2 p-8 ${
                account.popular ? 'border-[#aeff1c] shadow-lg' : 'border-gray-200'
              }`}
            >
              {account.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#aeff1c] text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{account.name}</h3>
                <div className="text-3xl font-bold text-[#104042] mb-4">{account.minDeposit}</div>
                <p className="text-gray-600">Minimum deposit</p>
              </div>

              <ul className="space-y-4 mb-8">
                {account.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#aeff1c] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  account.popular 
                    ? 'bg-[#aeff1c] hover:bg-[#9ee619] text-black' 
                    : 'bg-[#104042] hover:bg-[#0d3335] text-white'
                }`}
              >
                Open {account.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which account is right for you?
          </h2>
          <p className="text-gray-600 mb-6">
            Our account specialists are here to help you choose the perfect trading account based on your needs.
          </p>
          <Button className="bg-[#104042] hover:bg-[#0d3335] text-white">
            Speak with an Expert
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Accounts