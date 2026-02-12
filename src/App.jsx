import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
