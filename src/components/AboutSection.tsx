import { Button } from './ui/button'
import { CheckCircle } from 'lucide-react'

const AboutSection = () => {
  const features = [
    "Advanced Trading Technology",
    "Competitive Spreads from 0.0 pips",
    "Lightning Fast Execution",
    "24/7 Multilingual Support",
    "Regulated & Secure Environment",
    "Educational Resources & Analysis"
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#104042]">
                Why Choose Spartanox?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the difference with our cutting-edge trading platform designed for both beginners and professional traders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#aeff1c] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-[#104042] hover:bg-[#0d3335] text-white px-8 py-4 text-lg rounded-full">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://spartanox.com/assets/img/about/about-img-4.jpg" 
              alt="Trading analysis" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[#104042]">15+ Years</div>
              <div className="text-gray-600">Market Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection