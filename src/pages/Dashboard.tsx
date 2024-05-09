import React, { useState, useEffect } from 'react';
import Home from './Home';
import Header from '../components/Header';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Resume from '../components/Resume';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../common/LoadingScreen';

const Dashboard: React.FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        document.body.classList.add('disable-background-scroll');
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            document.body.classList.remove('disable-background-scroll');
        }
    }, [isLoading])


    return (
        <>
            {isLoading && <LoadingScreen />}
            <div className='home-header'>
                <Header />
            </div>
            <div className='home-main-screen'>
                <Home />
            </div>
            <About />
            <WorkExperience />
            <Resume />
            <Blogs />
            <Contact />
            <Footer />
        </>
    );
};

export default Dashboard;
