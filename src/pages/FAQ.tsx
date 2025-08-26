import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Button } from '../components/ui/button'

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create a trading account?",
          answer: "Creating an account is simple. Click 'Sign Up', fill out the registration form with your personal details, verify your email, and complete the identity verification process. The entire process typically takes 5-10 minutes."
        },
        {
          question: "What is the minimum deposit required?",
          answer: "The minimum deposit varies by account type: Starter Account requires $250, Professional Account requires $2,500, and VIP Account requires $25,000. You can start trading immediately after your deposit is processed."
        },
        {
          question: "Is my money safe with Spartanoxx?",
          answer: "Yes, your funds are completely secure. We use segregated client accounts, meaning your money is kept separate from company funds. We're also regulated by top-tier financial authorities and use bank-level security measures."
        }
      ]
    },
    {
      title: "Trading",
      questions: [
        {
          question: "What instruments can I trade?",
          answer: "You can trade a wide variety of instruments including major and minor currency pairs (Forex), commodities like gold and oil, stock indices such as S&P 500 and NASDAQ, and individual stocks from major exchanges."
        },
        {
          question: "What are the trading hours?",
          answer: "Forex markets are available 24/5 from Sunday 5 PM EST to Friday 5 PM EST. Stock markets follow their respective exchange hours, and commodities have varying trading hours. Our platform shows real-time market status."
        },
        {
          question: "Do you offer demo accounts?",
          answer: "Yes, we provide free demo accounts with $10,000 virtual funds. This allows you to practice trading, test strategies, and familiarize yourself with our platform without risking real money."
        }
      ]
    },
    {
      title: "Deposits & Withdrawals",
      questions: [
        {
          question: "How can I deposit funds?",
          answer: "We accept multiple deposit methods including credit/debit cards, bank transfers, and digital wallets like PayPal and Skrill. Most deposits are processed instantly, while bank transfers may take 1-3 business days."
        },
        {
          question: "Are there any deposit fees?",
          answer: "No, we don't charge any deposit fees. However, your bank or payment provider may charge their own fees. We absorb all processing costs to ensure you get the full value of your deposit."
        },
        {
          question: "How long do withdrawals take?",
          answer: "Withdrawal processing times vary by method: Credit/debit cards take 3-5 business days, bank transfers take 3-7 business days, and digital wallets are typically processed within 24 hours."
        }
      ]
    },
    {
      title: "Platform & Technical",
      questions: [
        {
          question: "What trading platforms do you offer?",
          answer: "We offer our proprietary web-based platform accessible from any browser, mobile apps for iOS and Android, and MetaTrader 4 (MT4) for advanced traders. All platforms sync your account data in real-time."
        },
        {
          question: "Do you provide market analysis?",
          answer: "Yes, we provide daily market analysis, economic calendar updates, trading signals, and educational webinars. Professional and VIP account holders receive additional premium research and one-on-one market briefings."
        },
        {
          question: "What if I experience technical issues?",
          answer: "Our technical support team is available 24/7 via live chat, email, and phone. We also have a comprehensive help center with video tutorials and troubleshooting guides for common issues."
        }
      ]
    }
  ]

  return (
    <main className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about trading with Spartanoxx. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-white border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#104042]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#aeff1c] rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Our expert support team is here to help you 24/7. Get personalized assistance with any questions about trading or your account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
              Contact Support
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
              Start Live Chat
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FAQ