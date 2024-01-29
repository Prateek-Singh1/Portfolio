import React from 'react'
import './WorkExperience.css'
import { Experience } from '../../constants'
import { PageHeadings } from '../common/GenericeFunction'

const WorkExperience = () => {
    return (
        <section id='Work' className='experience-wrapper'>
            <div className='experience-section'>
               <PageHeadings heading={'Experience'} subHeading={'Work Experience'}/>
                <div className='experience-main-container'>
                    {Experience.map((work, index) => {
                        return (
                            <div key={index} className='experience-container'>
                                <div className='experience-info-left' style={index === 0 ? { background: '#EE731B' } : { color: '#321A50' }}>
                                        <div className='experience-info-container experience-mobile'>
                                            <p className='experience-info-title'>{work.designation}</p>
                                            <p className='experience-designation'>{work.company}</p>
                                            <p className='experience-date'>{work.date}</p>
                                        </div>
                                    <p>{work.description}</p>
                                </div>
                                <div className='experience-info-right'>
                                    <div className='experience-info-container'>
                                        <p className='experience-info-title'>{work.designation}</p>
                                        <p className='experience-designation'>{work.company}</p>
                                        <p className='experience-date'>{work.date}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    <div className='experience-info-seperator'></div>
                    <div className='experience-info-dot-one'>01</div>
                    <div className='experience-info-dot-two'>02</div>
                    <div className='experience-info-dot-three'>03</div>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience