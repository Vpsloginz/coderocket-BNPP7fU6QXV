import { Button } from './ui/button'
import { Input } from './ui/input'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = {
    'About Us': [
      { text: 'Login', url: '/login' },
      { text: 'Sign Up', url: '/signup' },
      { text: 'Testimonial', url: '/#testimonials' },
      { text: 'Contact Us', url: '/contact' }
    ],
    'Guides': [
      { text: 'Our Services', url: '/#ourservices' },
      { text: 'Why Choose Us', url: '/#trust' },
      { text: 'Help Center', url: '/faq' },
      { text: 'FAQ', url: '/faq' }
    ],
    'Help Center': [
      { text: 'FAQ', url: '/faq' },
      { text: 'Contact Us', url: '/contact' },
      { text: 'Our Clients', url: '/#testimonials' },
      { text: 'Home', url: '/' }
    ]
  }

  return (
    <footer className="bg-[#104042] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#aeff1c] to-[#7dd321] rounded transform rotate-45"></div>
                <span className="text-2xl font-bold text-white tracking-tight">A5 CAPITAL</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Shaping the world of your investment with our expertise and dedication to excellence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.url} className="text-gray-300 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with market insights</p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 A5 Capital. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer