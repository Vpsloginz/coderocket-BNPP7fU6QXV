import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import HowToStart from './pages/HowToStart'
import HowToDeposit from './pages/HowToDeposit'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/how-to-start" element={<HowToStart />} />
          <Route path="/how-to-deposit" element={<HowToDeposit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App