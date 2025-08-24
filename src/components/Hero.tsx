import { Button } from './ui/button'
import { Star } from 'lucide-react'

const Hero = () => {
  const testimonialAvatars = [
    "https://picsum.photos/id/494/60/60",
    "https://picsum.photos/id/507/60/60", 
    "https://picsum.photos/id/548/60/60"
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Master The Markets
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Unlock your trading potential with real-time insights, powerful tools, and a community built for success. Join the platform where smart traders grow faster.
              </p>
            </div>

            {/* Rating Section */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {testimonialAvatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Trader ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-black">13k rating</span> (4.7 Rating)
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                LOGIN
              </Button>
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                SIGN UP
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://spartanox.com/assets/img/hero/hero-img-6.jpg" 
                alt="Professional trading dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Trading Dashboard Overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-sm text-gray-600 mb-1">Total Balance</div>
                <div className="text-2xl font-bold text-black flex items-center">
                  <span className="text-[#aeff1c] mr-1">$</span>
                  10,000<span className="text-gray-400">.00</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Cash</div>
              </div>

              {/* Balance Chart Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg w-64">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Balance</span>
                  <span className="text-sm font-bold text-black">$12000.00</span>
                </div>
                <div className="h-16 flex items-end space-x-1">
                  {/* Simple chart representation */}
                  <div className="w-full bg-gray-100 rounded-sm relative overflow-hidden">
                    <div className="h-12 bg-gradient-to-t from-[#aeff1c] to-[#7dd321] rounded-sm opacity-80"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero