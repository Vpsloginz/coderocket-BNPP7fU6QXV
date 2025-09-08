import { Shield, Clock, Award, Users, TrendingUp, Headphones } from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8 text-[#aeff1c]" />,
      title: "Regulated & Secure",
      description: "Fully regulated by top-tier financial authorities including FCA and CySEC"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#aeff1c]" />,
      title: "Fast Execution",
      description: "Lightning-fast order execution with average speeds of 0.1 seconds"
    },
    {
      icon: <Award className="w-8 h-8 text-[#aeff1c]" />,
      title: "Award Winning",
      description: "Recognized for excellence in trading services and customer satisfaction"
    },
    {
      icon: <Users className="w-8 h-8 text-[#aeff1c]" />,
      title: "Expert Support",
      description: "24/7 multilingual customer support from trading professionals"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#aeff1c]" />,
      title: "Advanced Tools",
      description: "Professional trading tools and real-time market analysis"
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#aeff1c]" />,
      title: "Education",
      description: "Comprehensive educational resources and trading webinars"
    }
  ]

  return (
    <section className="bg-[#104042] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Traders Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes Spartanox the preferred choice for traders worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center space-y-4 p-6">
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs