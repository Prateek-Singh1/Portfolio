import { Location } from "../assets/svg/svg"
import SEOImage from '../assets/images/seo-hero-image.png'
import awardOne from '../assets/images/award-one.jpg'

export const TechIcon = [
    'https://skillicons.dev/icons?i=html,css',
    'https://skillicons.dev/icons?i=react',
    'https://skillicons.dev/icons?i=js,ts',
    'https://skillicons.dev/icons?i=tailwind,scss'
]

export const TectRange = [
    {
        title: 'Web Design',
        range: 90
    },
    {
        title: 'Responsive Web Design',
        range: 90
    },
    {
        title: 'HTML/CSS',
        range: 90
    },
    // {
    //     title: 'ReactJs',
    //     range: 60
    // },
    // {
    //     title: 'JavaScript',
    //     range: 60
    // },
    {
        title: 'TailWindCSS',
        range: 90
    },
]

export const Experience = [
    {
        designation: 'Frontend Developer',
        company: 'MyYogaTeacher',
        date: 'June 2023 - Current',
        description: 'Experienced Frontend Engineer with 2 years of expertise crafting elegant solutions through clean code practices. Proficient in seamless Rest API integration for robust and responsive user interfaces. Recognized for collaborative teamwork, innovation, and adaptability. A dedicated learner, I bring value to forward-thinking organizations.',
    },
    {
        designation: 'UI Developer',
        company: 'MyYogaTeacher',
        date: 'April 2022 - Augst 2023',
        description: 'Skilled UI Developer with a flair for creating attractive, responsive applications. Expert in building reusable components for efficiency and consistency. Known for crafting user-friendly interfaces that prioritize a seamless user experience. Ready to bring innovation and design excellence to your dynamic team.',
    },
    {
        designation: 'Frontend Course',
        company: 'Prepbytes',
        date: 'September 2021 - January2022',
        description: 'Familiar with HTML, CSS, and JavaScript, I prioritize clean code, responsive design, and cross-browser compatibility. Skilled in Git version control and familiar with front-end frameworks like React, Angular, and Vue.js. I focus on performance optimization and accessibility, showcasing my abilities in a diverse portfolio. Committed to continuous learning and effective communication in a team environment.',
    },
]

export const ContactInfo = [
    {
        title: 'Address:',
        description: 'HSR sector 2 Layout, Bangalore - 620102',
        svg: <Location />
    },
    {
        title: 'My Email:',
        description: 'prateeksingh1319@mail.com',
        svg: <Location />
    },
    {
        title: 'Call Me On:',
        description: '+91 8016824920',
        svg: <Location />
    },
]

export const GetBlogs = [
    {
        img: SEOImage,
        title:'SEO',
        type:'Blog',
        description:'SEO, or Search Engine Optimization, is a set of practices aimed at optimizing a website or web page to improve its visibility and ranking on search engine results pages (SERPs). ',
        link:'/blogs/seo',
    },
    {
        img: awardOne,
        title:'Stress Reliever',
        type:'Award',
        description:'Problem solver, someone whose contributions help maintain a smooth workflow',
        link: `${window.location.pathname}src/assets/images/award-one.jpg`,
    },
]