import { Button } from '../components/ui/button'
import { ArrowRight, UserPlus, CreditCard, TrendingUp } from 'lucide-react'

const HowToStart = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-[#aeff1c]" />,
      title: "Create Your Account",
      description: "Sign up in minutes with our simple registration process. Provide basic information and verify your identity.",
      details: [
        "Fill out the registration form",
        "Verify your email address",
        "Complete identity verification",
        "Choose your account type"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-[#aeff1c]" />,
      title: "Fund Your Account",
      description: "Make your first deposit using our secure payment methods. Start with as little as $250.",
      details: [
        "Choose from multiple payment methods",
        "Secure encrypted transactions",
        "Instant deposit processing",
        "No hidden fees"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#aeff1c]" />,
      title: "Start Trading",
      description: "Access our advanced trading platform and begin your trading journey with confidence.",
      details: [
        "Download our trading platform",
        "Explore demo account first",
        "Use our educational resources",
        "Start with small positions"
      ]
    }
  ]

  return (
    <main className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Start Trading
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Begin your trading journey in three simple steps. Our streamlined process gets you 
            trading quickly and safely with full support along the way.
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="bg-[#104042] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#aeff1c] mr-3" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    {step.icon}
                    <p className="text-gray-500 mt-4">Step {index + 1} Illustration</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#aeff1c] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Join thousands of successful traders who chose Spartanoxx as their trading partner.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg">
            Create Account Now
          </Button>
        </div>
      </div>
    </main>
  )
}

export default HowToStart