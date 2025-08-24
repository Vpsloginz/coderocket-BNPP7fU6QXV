import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8fffe] to-[#f0fdf4] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#104042] leading-tight">
                Trade with
                <span className="block text-[#aeff1c]">Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join millions of traders worldwide and experience the power of advanced trading technology with competitive spreads and lightning-fast execution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold px-8 py-4 text-lg rounded-full">
                Start Trading Now
              </Button>
              <Button variant="outline" className="border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white px-8 py-4 text-lg rounded-full flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#104042]">770K+</div>
                <div className="text-sm text-gray-600">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#104042]">$2.5B+</div>
                <div className="text-sm text-gray-600">Monthly Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#104042]">0.1s</div>
                <div className="text-sm text-gray-600">Avg Execution</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://spartanox.com/assets/img/hero/hero-img-6.jpg" 
                alt="Professional trading environment" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#aeff1c] rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero