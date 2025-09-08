import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from './ui/button'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Elena Martinez",
      role: "Professional Trader",
      content: "A5 Capital has transformed my trading experience. The platform is incredibly user-friendly, and the execution speed is unmatched. I've seen significant improvements in my trading performance since switching to their ECN account.",
      rating: 5,
      image: "https://picsum.photos/id/494/80/80",
      profit: "+127%"
    },
    {
      name: "Marcus Johnson",
      role: "Investment Advisor",
      content: "The educational resources and market analysis provided by A5 Capital are exceptional. Their customer support team is always available when I need assistance, and the trading conditions are among the best in the industry.",
      rating: 5,
      image: "https://picsum.photos/id/507/80/80",
      profit: "+89%"
    },
    {
      name: "Sarah Chen",
      role: "Day Trader",
      content: "I've been trading with A5 Capital for over 2 years now. The tight spreads and fast execution have helped me maximize my profits. The mobile app is fantastic for trading on the go.",
      rating: 5,
      image: "https://picsum.photos/id/548/80/80",
      profit: "+156%"
    }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#104042] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from successful traders who have chosen A5 Capital as their trusted trading partner
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="w-8 h-8 text-[#aeff1c] mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
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
                    <div className="font-bold text-[#104042]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#aeff1c]">{testimonial.profit}</div>
                  <div className="text-xs text-gray-500">Annual Return</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mb-16">
          <Button variant="outline" size="sm" className="rounded-full border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-[#104042] text-[#104042] hover:bg-[#104042] hover:text-white">
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
      </div>
    </section>
  )
}

export default TestimonialsSection