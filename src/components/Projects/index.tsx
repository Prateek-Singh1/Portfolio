import React from 'react';
import './Projects.css';
import Cards from '../common/Card';
import { GetProjects } from '../../constants';
import { PageHeaderAlphabetHighlighter } from '../../assets/svg/svg';
import { PageHeadings } from '../common/GenericeFunction';

const Projects = () => {

    const handleOpenProject = (link) => {
        const url = link;
        window.open(url, '_blank');
    };

    return (
        <section id='Projects' className='project-wrapper'>
            <div className='project-container'>
                <PageHeadings heading={'Projects'} subHeading={'Creations'}/>
                <div className='project-list-container'>
                    {GetProjects.map((project, index) => {
                        return (
                            <div className={`${index % 2 === 0 ? '' : 'project-card-alignment'}`} key={index}>
                                <Cards
                                    image={project.img}
                                    title={project.title}
                                    date={project.date}
                                    description={project.description}
                                    onClick={() => handleOpenProject(project.link)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;
