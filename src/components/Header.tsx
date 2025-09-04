import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      label: 'Accounts',
      hasDropdown: true,
      items: [
        { text: 'Account Types', url: '/accounts' },
        { text: 'Demo Account', url: '/demo' },
        { text: 'Live Account', url: '/signup' },
        { text: 'Islamic Account', url: '/islamic-account' },
        { text: 'Account Comparison', url: '/account-comparison' }
      ]
    },
    {
      label: 'Guides',
      hasDropdown: true,
      items: [
        { text: 'How to Start', url: '/how-to-start' },
        { text: 'How to Deposit', url: '/how-to-deposit' },
        { text: 'Trading Guide', url: '/trading-guide' },
        { text: 'Platform Tutorial', url: '/platform-tutorial' },
        { text: 'Risk Management', url: '/risk-management' }
      ]
    },
    {
      label: 'Help Center',
      hasDropdown: true,
      items: [
        { text: 'FAQ', url: '/faq' },
        { text: 'Contact Us', url: '/contact' },
        { text: 'Support Center', url: '/support' },
        { text: 'Live Chat', url: '/chat' },
        { text: 'Video Tutorials', url: '/tutorials' }
      ]
    },
    {
      label: 'Home',
      hasDropdown: false,
      url: '/'
    }
  ]

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#aeff1c] to-[#7dd321] rounded transform rotate-45"></div>
                <span className="text-2xl font-bold text-[#104042] tracking-tight">A-CAPITAL</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-[#104042] hover:text-[#0d3335] font-medium text-lg transition-colors py-2"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        activeDropdown === item.label 
                          ? 'opacity-100 visible transform translate-y-0' 
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.items?.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.url}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#104042] transition-colors font-medium"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url!}
                    className="text-[#104042] hover:text-[#0d3335] font-medium text-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/signup">
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold px-6 py-3 text-sm rounded-full border-2 border-[#aeff1c] hover:border-[#9ee619] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                NEXT STOP: FREEDOM
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-[#104042]" /> : <Menu size={24} className="text-[#104042]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-left text-[#104042] hover:text-[#0d3335] font-medium py-3 px-2"
                        onClick={() => handleDropdownToggle(item.label)}
                      >
                        {item.label}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 pb-2 space-y-1">
                          {item.items?.map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.url}
                              className="block py-2 px-2 text-gray-600 hover:text-[#104042] transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.url!}
                      className="block text-[#104042] hover:text-[#0d3335] font-medium py-3 px-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link to="/signup">
                  <Button 
                    className="w-full bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold py-3 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    NEXT STOP: FREEDOM
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header