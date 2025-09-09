import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Shield, Lock } from 'lucide-react'
import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#aeff1c] to-[#7dd321] rounded transform rotate-45 mr-3"></div>
              <span className="text-2xl font-bold text-[#104042]">A5 CAPITAL</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your trading account</p>
          </div>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email address"
                className="mt-2 h-12"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
              <div className="relative mt-2">
                <Input 
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-600">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-[#104042] hover:text-[#0d3335] font-medium">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold h-12 text-lg">
              Sign In to Trading Account
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">New to A5 Capital?</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/signup" className="text-[#104042] hover:text-[#0d3335] font-medium">
                Create your trading account →
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center">
                <Lock className="w-4 h-4 mr-1" />
                <span>Bank-level Security</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Having trouble accessing your account?</p>
          <Link to="/contact" className="text-[#104042] hover:text-[#0d3335] font-medium">
            Contact our 24/7 support team
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Login