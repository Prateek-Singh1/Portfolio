import React, { useState } from 'react'
import './Resume.css'
import Button from '../common/Button'
import ResumePopup from './components/ResumePopup';

const Resume = () => {

    const [isResumePopupOpen, setIsResumePopupOpen] = useState(false);
    const openResumeOption = () => {
        setIsResumePopupOpen(!isResumePopupOpen);
    }
    return (
        <>
            <section id='Resume' className='resume-wrapper'>
                <div className='resume-container'>
                    <div className='resume-content'>
                        <div className='resume-description'>
                            <div className='resume-title'>Know More</div>
                            <p>Explore my professional journey and qualifications by clicking the 'Resume' button. A preview popup provides a glimpse of my resume, and you can also choose to download the complete document for a detailed overview of my skills and experience.

                            </p>

                        </div>
                        <div className='resume-btn'>
                            <Button text='Resume' color='white' size='large' onClick={openResumeOption} />
                        </div>
                    </div>
                </div>
            </section>
            {isResumePopupOpen ?
                <ResumePopup
                    heading='Resume Access Options'
                    subHeading='Choose your preferred action below' onClose={() => setIsResumePopupOpen(false)} />
                :
                <></>}
        </>
    )
}

export default Resume