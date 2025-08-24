import Hero from '../components/Hero'
import BrandPartners from '../components/BrandPartners'
import Services from '../components/Services'
import TrustSection from '../components/TrustSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandPartners />
      <div id="ourservices">
        <Services />
      </div>
      <div id="trust">
        <TrustSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
    </main>
  )
}

export default Home