import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#aeff1c]" />,
      title: "Phone Support",
      details: ["+1 (555) 123-4567", "+44 20 7123 4567"],
      description: "24/7 multilingual support"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#aeff1c]" />,
      title: "Email Support",
      details: ["support@a5capital.com", "info@a5capital.com"],
      description: "Response within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#aeff1c]" />,
      title: "Office Address",
      details: ["123 Financial District", "New York, NY 10004"],
      description: "Visit our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#aeff1c]" />,
      title: "Trading Hours",
      details: ["Monday - Friday", "24/5 Market Access"],
      description: "Global market coverage"
    }
  ]

  return (
    <main className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our expert team. We're here to help you with any questions 
            about trading, accounts, or our platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName"
                    type="text" 
                    placeholder="Your first name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    type="text" 
                    placeholder="Your last name"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account">Account Support</SelectItem>
                    <SelectItem value="trading">Trading Questions</SelectItem>
                    <SelectItem value="technical">Technical Issues</SelectItem>
                    <SelectItem value="billing">Billing & Payments</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell us how we can help you..."
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-[#aeff1c] hover:bg-[#9ee619] text-black font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-[#104042] p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700">{detail}</p>
                    ))}
                    <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#104042] rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-gray-300 mb-4">
                Our live chat support is available 24/7 for urgent trading questions and account assistance.
              </p>
              <Button className="bg-[#aeff1c] hover:bg-[#9ee619] text-black">
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-6">
              Find quick answers to common questions in our comprehensive FAQ section.
            </p>
            <Button variant="outline" className="border-gray-300">
              Visit FAQ Section
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact