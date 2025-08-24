import { Button } from './ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      title: "Market Analysis: EUR/USD Outlook for Q4 2024",
      excerpt: "Our expert analysts provide insights into the Euro-Dollar pair's potential movements in the final quarter of 2024.",
      date: "December 15, 2024",
      image: "https://spartanox.com/assets/img/blog/blog-img-1.jpg",
      category: "Market Analysis"
    },
    {
      title: "New Trading Features Now Available",
      excerpt: "Discover the latest enhancements to our trading platform, including advanced charting tools and risk management features.",
      date: "December 12, 2024",
      image: "https://spartanox.com/assets/img/blog/blog-img-2.jpg",
      category: "Platform Updates"
    },
    {
      title: "Cryptocurrency Trading: Opportunities and Risks",
      excerpt: "Learn about the potential opportunities and risks involved in cryptocurrency trading with our comprehensive guide.",
      date: "December 10, 2024",
      image: "https://spartanox.com/assets/img/blog/blog-img-3.jpg",
      category: "Education"
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#104042] mb-6">
            Latest News & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest market news, trading insights, and platform updates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#aeff1c] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                
                <h3 className="text-xl font-bold text-[#104042] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost" className="text-[#104042] hover:text-[#0d3335] p-0 h-auto font-semibold">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#104042] hover:bg-[#0d3335] text-white px-8 py-4 text-lg rounded-full">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection