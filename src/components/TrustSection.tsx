import { CheckCircle, Users, Award, Clock, Shield, TrendingUp } from 'lucide-react'

const TrustSection = () => {
  const stats = [
    { number: "770,000+", label: "Active Traders" },
    { number: "$2.5B+", label: "Monthly Volume" },
    { number: "0.1s", label: "Avg Execution" },
    { number: "24/7", label: "Support" }
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-[#aeff1c]" />,
      title: "Regulated & Secure",
      description: "Fully regulated by top-tier financial authorities"
    },
    {
      icon: <Users className="w-6 h-6 text-[#aeff1c]" />,
      title: "Expert Support",
      description: "24/7 multilingual customer support team"
    },
    {
      icon: <Award className="w-6 h-6 text-[#aeff1c]" />,
      title: "Award Winning",
      description: "Recognized for excellence in trading services"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#aeff1c]" />,
      title: "Fast Execution",
      description: "Lightning-fast order execution in milliseconds"
    }
  ]

  return (
    <section className="bg-[#104042] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Developing Trust in Finance
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Enhancing financial trust through accountability, professionalism, and dependable solutions tailored to client needs.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {feature.icon}
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-8">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-[#aeff1c]">770,000+</div>
                  <p className="text-white text-lg">Active Traders Worldwide</p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">$2.5B+</div>
                    <p className="text-sm text-gray-300">Monthly Volume</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">0.1s</div>
                    <p className="text-sm text-gray-300">Avg Execution</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <p className="text-sm text-gray-300">Support</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-2 text-[#aeff1c]">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">15+ Years Market Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection