import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Users, Award } from 'lucide-react'
const SignUp = () => {
  const benefits = [
    { icon: <CheckCircle className="w-5 h-5 text-[#aeff1c]" />, text: "Professional managed account options available" },
    { icon: <CheckCircle className="w-5 h-5 text-[#aeff1c]" />, text: "Access to 100+ trading instruments" },
    { icon: <CheckCircle className="w-5 h-5 text-[#aeff1c]" />, text: "24/7 multilingual customer support" },
    { icon: <CheckCircle className="w-5 h-5 text-[#aeff1c]" />, text: "Advanced trading platforms (MT4/MT5)" }
  ]
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="lg:sticky lg:top-8">
            <div className="text-center lg:text-left mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#aeff1c] to-[#7dd321] rounded transform rotate-45 mr-3"></div>
                <span className="text-2xl font-bold text-[#104042]">A5 CAPITAL</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Trading Today</h1>
              <p className="text-xl text-gray-600">Join over 770,000 traders worldwide</p>
            </div>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {benefit.icon}
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-[#104042] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#104042]">770K+</div>
                <div className="text-sm text-gray-600">Active Traders</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Award className="w-8 h-8 text-[#104042] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#104042]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-[#104042] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#104042]">100%</div>
                <div className="text-sm text-gray-600">Regulated</div>
              </div>
            </div>
          </div>
          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
              <p className="text-gray-600">Get started in less than 3 minutes</p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</Label>
                  <Input 
                    id="firstName"
                    type="text" 
                    placeholder="Enter your first name"
                    className="mt-2 h-12"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</Label>
                  <Input 
                    id="lastName"
                    type="text" 
                    placeholder="Enter your last name"
                    className="mt-2 h-12"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email address"
                  className="mt-2 h-12"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                <Input 
                  id="phone"
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  className="mt-2 h-12"
                  required
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-sm font-medium text-gray-700">Country of Residence *</Label>
                <Select>
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="es">Spain</SelectItem>
                    <SelectItem value="it">Italy</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="sg">Singapore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="accountType" className="text-sm font-medium text-gray-700">Preferred Account Type</Label>
                <Select>
                  <SelectTrigger className="mt-2 h-12">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter Account (Min. $250)</SelectItem>
                    <SelectItem value="professional">Professional Account (Min. $2,500)</SelectItem>
                    <SelectItem value="vip">VIP Account (Min. $25,000)</SelectItem>
                    <SelectItem value="managed">Managed Account (Min. $50,000)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" className="mt-1" required />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <Link to="/terms" className="text-[#104042] hover:text-[#0d3335] font-medium">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-[#104042] hover:text-[#0d3335] font-medium">Privacy Policy</Link>
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="risk" className="mt-1" required />
                  <Label htmlFor="risk" className="text-sm text-gray-600 leading-relaxed">
                    I acknowledge that trading involves substantial risk and I may lose money
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="marketing" className="mt-1" />
                  <Label htmlFor="marketing" className="text-sm text-gray-600">
                    I would like to receive market updates and trading insights via email
                  </Label>
                </div>
              </div>
              <Button className="w-full bg-[#aeff1c] hover:bg-[#9ee619] text-black font-bold h-12 text-lg">
                Create Trading Account
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-[#104042] hover:text-[#0d3335] font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <span>🔒 Your data is protected with 256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default SignUp