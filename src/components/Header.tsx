import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { text: 'Accounts', url: '/accounts' },
    { text: 'How to Start', url: '/how-to-start' },
    { text: 'How to Deposit', url: '/how-to-deposit' },
    { text: 'Login', url: '/login' }
  ]

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://spartanox.com/assets/img/logo/logo-1.svg" 
                alt="Spartanox" 
                className="h-9 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/signup">
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-semibold px-6">
                START LIVE TRADING
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <Link to="/signup">
                <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black font-semibold w-full mt-4">
                  START LIVE TRADING
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header