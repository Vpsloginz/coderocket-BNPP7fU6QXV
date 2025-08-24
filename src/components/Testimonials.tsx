import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Elena M.",
      role: "Professional Trader",
      content: "As someone new to trading, I was nervous at first. But the learning resources and support team helped me gain confidence quickly.",
      rating: 5,
      image: "https://picsum.photos/id/494/80/80"
    },
    {
      name: "Marcus J.",
      role: "Investment Advisor",
      content: "The platform's advanced tools and real-time data have significantly improved my trading performance. Highly recommended!",
      rating: 5,
      image: "https://picsum.photos/id/507/80/80"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Words from clients.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="bg-[#aeff1c] rounded-2xl p-8 lg:p-12 mt-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            Start living your dreams today!
          </h3>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg">
            Start now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials