import { Location } from "../assets/svg/svg"
import digitalClock from '../assets/images/digital-clock.png'
import SEOImage from '../assets/images/seo-hero-image.png'
import todoList from '../assets/images/todo-list.png'

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
    {
        title: 'ReactJs',
        range: 60
    },
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

export const GetProjects = [
    {
        img: SEOImage,
        title:'SEO',
        date:'June 16, 2023',
        description:'SEO, or Search Engine Optimization, is a set of practices aimed at optimizing a website or web page to improve its visibility and ranking on search engine results pages (SERPs). ',
        link:'/blogs/seo',
    },
    {
        img:todoList,
        title:'ToDo List',
        date:'Dec 23, 2021',
        description:'Designed and implemented a dynamic To-Do List application using JavaScript, showcasing strong front-end development skills and proficiency in creating interactive user interfaces',
        link:'/blogs/react',
    },
    {
        img:digitalClock,
        title:'Digital Clock',
        date:'Nov 26, 2021',
        description:'Created a dynamic digital clock application with automated wallpaper changes based on user-set mealtime preferences. Demonstrates strong front-end development skills, time management functionality, and creative problem-solving.',
        link:'https://prateek-singh1.github.io/digital-clock/',
    },
]