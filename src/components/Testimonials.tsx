import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Day Trader",
      location: "Miami, FL",
      content: "I've been trading for 8 years and tried many brokers. A5 Capital's execution speed is what keeps me here. During the NFP release last month, I got filled at exactly my target price while other platforms were slipping 3-4 pips. The spreads on EUR/USD average 0.8 pips during London session, which is competitive.",
      rating: 5,
      image: "https://picsum.photos/id/507/80/80",
      profit: "+89%",
      tradingSince: "2019",
      accountType: "Professional"
    },
    {
      name: "Sarah Chen",
      role: "Swing Trader",
      location: "San Francisco, CA",
      content: "What impressed me most was their customer service. When I had issues with a withdrawal last year, David from support called me personally within 2 hours. The mobile app works flawlessly - I've executed trades from airports, coffee shops, you name it. My average monthly return has been 12% since joining.",
      rating: 5,
      image: "https://picsum.photos/id/494/80/80",
      profit: "+156%",
      tradingSince: "2020",
      accountType: "VIP"
    },
    {
      name: "James Thompson",
      role: "Forex Scalper",
      location: "London, UK",
      content: "The ECN account changed my trading completely. Raw spreads starting from 0.0 pips on major pairs, and I only pay $3.50 commission per lot. During Asian session, I can scalp 5-10 pips consistently. Their MT5 platform never freezes during high volatility, which happened frequently with my previous broker.",
      rating: 5,
      image: "https://picsum.photos/id/548/80/80",
      profit: "+234%",
      tradingSince: "2018",
      accountType: "ECN"
    }
  ]

  const testimonialsPerPage = 3
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentTestimonials = () => {
    const start = currentSlide * testimonialsPerPage
    return testimonials.slice(start, start + testimonialsPerPage)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#104042] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from traders who have chosen A5 Capital as their trusted trading partner
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {getCurrentTestimonials().map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="w-8 h-8 text-[#aeff1c] mb-4" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {testimonial.accountType}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-[#104042] text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-[#aeff1c]">{testimonial.profit}</div>
                  <div className="text-xs text-gray-500">Since {testimonial.tradingSince}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#aeff1c] to-[#9ee619] rounded-3xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Ready to Start Your Trading Journey?
          </h3>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders and experience the difference with A5 Capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full">
              Open Live Account
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg rounded-full">
              Try Demo Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials