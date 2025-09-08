import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <main className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600">Start your trading journey with Spartanox</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  type="text" 
                  placeholder="Enter your first name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName"
                  type="text" 
                  placeholder="Enter your last name"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone"
                type="tel" 
                placeholder="Enter your phone number"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Create a password"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword"
                  type="password" 
                  placeholder="Confirm your password"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="accountType">Account Type</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">Starter Account ($250)</SelectItem>
                  <SelectItem value="professional">Professional Account ($2,500)</SelectItem>
                  <SelectItem value="vip">VIP Account ($25,000)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-[#104042] hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-[#104042] hover:underline">Privacy Policy</a>
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="marketing" className="mt-1" />
                <Label htmlFor="marketing" className="text-sm">
                  I would like to receive marketing communications and updates
                </Label>
              </div>
            </div>

            <Button className="w-full bg-[#aeff1c] hover:bg-[#9ee619] text-black font-semibold">
              Create Account
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#104042] hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUp