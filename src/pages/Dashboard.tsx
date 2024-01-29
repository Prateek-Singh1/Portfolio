import React from 'react'
import Home from './Home'
import Header from '../components/Header'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Dashboard = () => {
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

export default Dashboard