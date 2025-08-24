import { Button } from '../components/ui/button'
import { CreditCard, Smartphone, Building, Shield } from 'lucide-react'

const HowToDeposit = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-8 h-8 text-[#aeff1c]" />,
      name: "Credit/Debit Cards",
      description: "Visa, Mastercard, and other major cards accepted",
      processingTime: "Instant",
      minAmount: "$50",
      fees: "No fees"
    },
    {
      icon: <Building className="w-8 h-8 text-[#aeff1c]" />,
      name: "Bank Transfer",
      description: "Direct bank transfers and wire transfers",
      processingTime: "1-3 business days",
      minAmount: "$100",
      fees: "No fees"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#aeff1c]" />,
      name: "Digital Wallets",
      description: "PayPal, Skrill, Neteller and more",
      processingTime: "Instant",
      minAmount: "$25",
      fees: "No fees"
    }
  ]

  const steps = [
    "Log into your trading account",
    "Navigate to the 'Deposit' section",
    "Select your preferred payment method",
    "Enter the deposit amount",
    "Complete the secure payment process",
    "Funds will be credited to your account"
  ]

  return (
    <main className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Deposit Funds
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fund your trading account quickly and securely with our multiple payment options. 
            All transactions are protected with bank-level security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.name}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Processing Time:</span>
                  <span className="font-medium">{method.processingTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Min Amount:</span>
                  <span className="font-medium">{method.minAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fees:</span>
                  <span className="font-medium text-[#aeff1c]">{method.fees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Deposit Process</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#aeff1c] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#104042] rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-[#aeff1c] mr-3" />
              <h3 className="text-2xl font-bold">Security & Protection</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#aeff1c] mr-2">•</span>
                <span>256-bit SSL encryption for all transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#aeff1c] mr-2">•</span>
                <span>PCI DSS compliant payment processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#aeff1c] mr-2">•</span>
                <span>Segregated client funds protection</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#aeff1c] mr-2">•</span>
                <span>Anti-fraud monitoring systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#aeff1c] mr-2">•</span>
                <span>Regulatory compliance and oversight</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with Your Deposit?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you with any deposit-related questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black">
              Make a Deposit
            </Button>
            <Button variant="outline" className="border-gray-300">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HowToDeposit