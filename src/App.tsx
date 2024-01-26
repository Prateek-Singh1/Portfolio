import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div className='home-header'>
        <Header />
      </div>
      <div className='home-main-screen'>
        <Home />
      </div>
      <About />
      <WorkExperience />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
