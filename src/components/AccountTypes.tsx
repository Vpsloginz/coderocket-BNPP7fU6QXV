import { Button } from './ui/button'
import { Check } from 'lucide-react'

const AccountTypes = () => {
  const accounts = [
    {
      name: "Standard",
      minDeposit: "$100",
      spread: "From 1.2 pips",
      leverage: "Up to 1:500",
      features: [
        "No Commission",
        "Instant Execution",
        "24/7 Support",
        "Educational Resources",
        "Mobile Trading"
      ],
      popular: false
    },
    {
      name: "ECN",
      minDeposit: "$500",
      spread: "From 0.0 pips",
      leverage: "Up to 1:200",
      features: [
        "Raw Spreads",
        "Market Execution",
        "Advanced Tools",
        "Priority Support",
        "VPS Hosting"
      ],
      popular: true
    },
    {
      name: "VIP",
      minDeposit: "$10,000",
      spread: "From 0.0 pips",
      leverage: "Up to 1:100",
      features: [
        "Dedicated Manager",
        "Custom Solutions",
        "Premium Analysis",
        "Exclusive Events",
        "Personal Trading Coach"
      ],
      popular: false
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#104042] mb-6">
            Account Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the account type that best suits your trading style and experience level
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <div key={index} className={`relative bg-white p-8 rounded-2xl border-2 ${account.popular ? 'border-[#aeff1c]' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {account.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#aeff1c] text-black px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#104042] mb-2">
                  {account.name}
                </h3>
                <div className="text-3xl font-bold text-[#104042] mb-2">
                  {account.minDeposit}
                </div>
                <p className="text-gray-600">Minimum Deposit</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Spread:</span>
                  <span className="font-semibold text-[#104042]">{account.spread}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Leverage:</span>
                  <span className="font-semibold text-[#104042]">{account.leverage}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {account.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-[#aeff1c] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full ${account.popular ? 'bg-[#aeff1c] hover:bg-[#9ee619] text-black' : 'bg-[#104042] hover:bg-[#0d3335] text-white'} font-bold py-3`}>
                Open {account.name} Account
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccountTypes