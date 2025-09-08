import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

const TestimonialsSection = () => {
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
    },
    {
      name: "Maria Gonzalez",
      role: "Part-time Trader",
      location: "Barcelona, Spain",
      content: "I started with just $500 as a complete beginner. Their educational webinars every Tuesday helped me understand risk management. Lost money in the first 3 months, but their demo account let me practice without pressure. Now I'm consistently profitable and withdrew $2,400 last quarter.",
      rating: 4,
      image: "https://picsum.photos/id/573/80/80",
      profit: "+67%",
      tradingSince: "2022",
      accountType: "Standard"
    },
    {
      name: "Robert Kim",
      role: "Algorithmic Trader",
      location: "Seoul, South Korea",
      content: "Running 3 EAs simultaneously on their VPS. Latency to their servers is under 1ms from Seoul, which is crucial for my high-frequency strategies. Had one EA malfunction and lose $800, but their trade reconstruction team helped me get a partial refund. Very professional approach.",
      rating: 5,
      image: "https://picsum.photos/id/582/80/80",
      profit: "+312%",
      tradingSince: "2017",
      accountType: "VIP"
    },
    {
      name: "Amanda Foster",
      role: "Commodity Trader",
      location: "Toronto, Canada",
      content: "I focus mainly on gold and oil. Their spreads on XAUUSD are typically 2.5 pips, which is reasonable for precious metals. What I love is the economic calendar integration - I get push notifications 15 minutes before major news. Made $3,200 profit during the last FOMC meeting volatility.",
      rating: 5,
      image: "https://picsum.photos/id/598/80/80",
      profit: "+143%",
      tradingSince: "2021",
      accountType: "Professional"
    },
    {
      name: "David Wilson",
      role: "Retired Investor",
      location: "Melbourne, Australia",
      content: "At 62, I was hesitant about online trading. But A5 Capital's account manager, Jennifer, walked me through everything over three phone calls. I trade conservatively - mostly major pairs with 1:50 leverage. Small profits, but consistent. Withdrew $1,800 for my grandson's birthday last month.",
      rating: 4,
      image: "https://picsum.photos/id/612/80/80",
      profit: "+34%",
      tradingSince: "2023",
      accountType: "Standard"
    },
    {
      name: "Lisa Park",
      role: "Crypto Trader",
      location: "Vancouver, Canada",
      content: "Their crypto CFDs are perfect for my strategy. I can short Bitcoin when needed, unlike spot exchanges. Spreads on BTCUSD are around 50-80 points, which is fair considering the volatility. Made $5,600 during the March crypto rally. Withdrawal to my bank took exactly 2 business days.",
      rating: 5,
      image: "https://picsum.photos/id/629/80/80",
      profit: "+198%",
      tradingSince: "2020",
      accountType: "Professional"
    },
    {
      name: "Carlos Mendez",
      role: "Index Trader",
      location: "Mexico City, Mexico",
      content: "I trade SPX500 and NAS100 exclusively. The margin requirements are reasonable - I can control $50,000 worth of S&P with just $1,000. During earnings season, I made $4,300 in two weeks. Their platform shows real-time P&L, which helps with my risk management. Very satisfied overall.",
      rating: 5,
      image: "https://picsum.photos/id/634/80/80",
      profit: "+176%",
      tradingSince: "2019",
      accountType: "Professional"
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
          <div className="mt-4 text-sm text-gray-500">
            Showing {testimonials.length} verified client reviews
          </div>
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

        <div className="flex justify-center items-center space-x-4 mb-16">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#104042]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
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

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#104042]">4.8/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#104042]">2,847</div>
            <div className="text-sm text-gray-600">Verified Reviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#104042]">94%</div>
            <div className="text-sm text-gray-600">Would Recommend</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#104042]">24h</div>
            <div className="text-sm text-gray-600">Avg Support Response</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection