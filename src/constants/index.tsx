import { Call, Email, Location } from "../assets/svg/svg"
import SEOImage from '../assets/images/seo-hero-image.png'
import awardOne from '../assets/images/award-one.jpg'
import awardTwo from '../assets/images/award-two.jpg'

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
        description: '<ul><li>Experienced Frontend Engineer with 2 years of expertise</li><li>Craft elegant solutions through clean code practices</li><li>Proficient in seamless Rest API integration for robust and responsive user interfaces</li><li>Recognized for collaborative teamwork, innovation, and adaptability</li><li>Dedicated learner, bringing value to forward-thinking organizations</li></ul>',
    },
    {
        designation: 'UI Developer',
        company: 'MyYogaTeacher',
        date: 'April 2022 - Augst 2023',
        description: '<ul><li>Skilled UI Developer with a flair for creating attractive, responsive applications.</li><li>Expert in building reusable components for efficiency and consistency.</li><li>Known for crafting user-friendly interfaces that prioritize a seamless user experience.</li><li>Ready to bring innovation and design excellence to your dynamic team.</li></ul>',
    },
    {
        designation: 'Frontend Course',
        company: 'Prepbytes',
        date: 'September 2021 - January2022',
        description: '<ul><li>Familiar with HTML, CSS, and JavaScript, prioritizing clean code, responsive design, and cross-browser compatibility.</li><li>Skilled in Git version control and familiar with front-end frameworks React.</li><li>Focus on performance optimization and accessibility, showcasing abilities in a diverse portfolio.</li><li>Committed to continuous learning and effective communication in a team environment.</li></ul>',
    },
]

export const ContactInfo = [
    {
        title: 'Address:',
        description: 'HSR , Bangalore - 560102',
        svg: <Location color='white' />
    },
    {
        title: 'My Email:',
        description: 'prateeksingh1319@gmail.com',
        svg: <Email color='white' />
    },
    {
        title: 'Call Me On:',
        description: '+91 8016824920',
        svg: <Call color='white' />
    },
]

export const GetBlogs = [
    {
        img: SEOImage,
        title: 'SEO',
        type: 'Blog',
        description: 'SEO, or Search Engine Optimization, is a set of practices aimed at optimizing a website or web page to improve its visibility and ranking on search engine results pages (SERPs). ',
        link: '/blogs/seo',
    },
    {
        img: awardOne,
        title: 'Stress Reliever',
        type: 'Reward',
        description: 'Problem solver, someone whose contributions help maintain a smooth workflow',
        link: `${window.location.pathname}src/assets/images/award-one.jpg`,
    },
    {
        img: awardTwo,
        title: 'Strength builder',
        type: 'Reward',
        description: 'Significant contribution on a subject',
        link: `${window.location.pathname}src/assets/images/award-two.jpg`,
    },
]