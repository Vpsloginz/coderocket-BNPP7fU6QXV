import { Button } from '../components/ui/button'
import { CreditCard, Smartphone, Building, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

const HowToDeposit = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-8 h-8 text-[#aeff1c]" />,
      name: "Credit/Debit Cards",
      description: "Visa, Mastercard, American Express accepted worldwide",
      processingTime: "Instant",
      minAmount: "$50",
      maxAmount: "$50,000",
      fees: "No fees",
      supported: ["Visa", "Mastercard", "American Express", "Maestro"]
    },
    {
      icon: <Building className="w-8 h-8 text-[#aeff1c]" />,
      name: "Bank Wire Transfer",
      description: "Secure direct bank transfers and SWIFT wire transfers",
      processingTime: "1-3 business days",
      minAmount: "$100",
      maxAmount: "No limit",
      fees: "No fees from A5 Capital",
      supported: ["SWIFT", "Local Bank Transfer", "ACH", "SEPA"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#aeff1c]" />,
      name: "Digital Wallets",
      description: "Popular e-wallets and digital payment solutions",
      processingTime: "Instant",
      minAmount: "$25",
      maxAmount: "$25,000",
      fees: "No fees",
      supported: ["PayPal", "Skrill", "Neteller", "Perfect Money"]
    }
  ]

  const depositSteps = [
    {
      step: 1,
      title: "Log into Your Account",
      description: "Access your A5 Capital trading account using your credentials"
    },
    {
      step: 2,
      title: "Navigate to Deposits",
      description: "Click on 'Deposit Funds' in your account dashboard"
    },
    {
      step: 3,
      title: "Choose Payment Method",
      description: "Select your preferred deposit method from available options"
    },
    {
      step: 4,
      title: "Enter Deposit Amount",
      description: "Specify the amount you wish to deposit (minimum $25)"
    },
    {
      step: 5,
      title: "Complete Payment",
      description: "Follow the secure payment process to complete your deposit"
    },
    {
      step: 6,
      title: "Funds Available",
      description: "Your funds will be credited to your trading account"
    }
  ]

  const securityFeatures = [
    "256-bit SSL encryption for all transactions",
    "PCI DSS Level 1 compliant payment processing",
    "Segregated client funds in tier-1 banks",
    "Real-time fraud monitoring and prevention",
    "Two-factor authentication (2FA) support",
    "Regulatory compliance and oversight"
  ]

  const importantNotes = [
    "Deposits must be made from accounts in your name only",
    "Third-party deposits are not accepted for security reasons",
    "Some payment methods may have regional restrictions",
    "Currency conversion fees may apply for non-USD deposits",
    "Minimum deposit amounts vary by account type"
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
            All transactions are protected with bank-level security and processed instantly.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-6">{method.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.name}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Processing Time:</span>
                  <span className="font-medium text-[#aeff1c]">{method.processingTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Min Amount:</span>
                  <span className="font-medium">{method.minAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Max Amount:</span>
                  <span className="font-medium">{method.maxAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fees:</span>
                  <span className="font-medium text-[#aeff1c]">{method.fees}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-xs text-gray-500 mb-2">Supported:</p>
                <div className="flex flex-wrap gap-1">
                  {method.supported.map((item, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deposit Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Deposit Process</h2>
            <div className="space-y-6">
              {depositSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#aeff1c] text-black rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#104042] rounded-xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-[#aeff1c] mr-3" />
              <h3 className="text-2xl font-bold">Security & Protection</h3>
            </div>
            <ul className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#aeff1c] mr-3 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-16">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
            <h3 className="text-xl font-bold text-yellow-800">Important Information</h3>
          </div>
          <ul className="space-y-2">
            {importantNotes.map((note, index) => (
              <li key={index} className="flex items-start text-yellow-800">
                <span className="text-yellow-600 mr-2 mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <Clock className="w-12 h-12 text-[#104042] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help with Your Deposit?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our dedicated support team is available 24/7 to assist you with any deposit-related questions. 
            Average response time is under 2 minutes via live chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-semibold">
              Start Live Chat
            </Button>
            <Button variant="outline" className="border-gray-300">
              Email Support
            </Button>
            <Button variant="outline" className="border-gray-300">
              Call +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HowToDeposit