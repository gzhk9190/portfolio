import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TestingApproach from './components/TestingApproach'
import Certificates from './components/Certificates'
import AiWorkflow from './components/AiWorkflow'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><About /><Skills /><Projects /><Certificates /><TestingApproach /><AiWorkflow /><Contact />
      </main>
      <Footer />
    </>
  )
}
