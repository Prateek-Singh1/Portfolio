import { Call, Email, Location } from "../assets/svg/svg"
import SEOImage from '../assets/images/seo-hero-image.png'
import { Code, Cpu, Layout, OpenBook, Profile, Search } from "../assets/svg/icons"

export const TechIcon = [
    {
        title: 'React',
        logo: 'https://skillicons.dev/icons?i=react',
        link: 'https://react.dev/'
    },
    {
        title: 'Vite',
        logo: 'https://skillicons.dev/icons?i=vite',
        link: 'https://vite.dev/'
    },
    {
        title: 'TypeScript',
        logo: 'https://skillicons.dev/icons?i=ts',
        link: 'https://www.typescriptlang.org/'
    },
    {
        title: 'Redux',
        logo: 'https://skillicons.dev/icons?i=redux',
        link: 'https://redux.js.org/'
    },
    {
        title: 'JavaScript',
        logo: 'https://skillicons.dev/icons?i=js',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        title: 'TailwindCSS',
        logo: 'https://skillicons.dev/icons?i=tailwind',
        link: 'https://tailwindcss.com/'
    },
    {
        title: 'HTML',
        logo: 'https://skillicons.dev/icons?i=html',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        title: 'CSS',
        logo: 'https://skillicons.dev/icons?i=css',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        title: 'SASS',
        logo: 'https://skillicons.dev/icons?i=sass',
        link: 'https://sass-lang.com/'
    }
]

export const TectRange = [
    {
        title: 'Web Design',
        range: 93
    },
    {
        title: 'Responsive Web Design',
        range: 95
    },
    // {
    //     title: 'HTML/CSS',
    //     range: 95
    // },
    // {
    //     title: 'ReactJs',
    //     range: 93
    // },
    // {
    //     title: 'JavaScript',
    //     range: 89
    // },
    // {
    //     title: 'TailWindCSS',
    //     range: 91
    // },
]

export const Experience = [
    {
        designation: 'Frontend Developer',
        company: 'MyYogaTeacher',
        date: 'July 2023 - Current',
        link:'https://myyogateacher.com/',
        icon:'https://cloudimages.myyogateacher.com/dgerdfai4/image/upload/f_auto/v1642535357/website/lp/mobileHeaderIcon.png',
        description: '<ul><li>Develop and maintain <b>user-friendly, high-performance web applications</b> using modern frontend technologies.</li><li>Write <b>clean, efficient, and maintainable code</b> following industry best practices.</li><li><b>Seamlessly integrate REST APIs</b>, ensuring robust and responsive user experiences.</li><li>Recognized for <b>collaborative teamwork, innovation, and adaptability</b> in dynamic environments.</li><li>Passionate about <b>continuous learning, problem-solving, and delivering scalable solutions</b>.</li></ul>',
    },
    {
        designation: 'UI Developer',
        company: 'MyYogaTeacher',
        date: 'April 2022 - June 2023',
        link:'https://myyogateacher.com/',
        icon:'https://cloudimages.myyogateacher.com/dgerdfai4/image/upload/f_auto/v1642535357/website/lp/mobileHeaderIcon.png',
        description: '<ul><li><b>Skilled UI Developer</b> with expertise in creating <b>visually appealing and highly responsive applications</b>.</li><li><b>Expert in building reusable components</b> to enhance efficiency, maintainability, and design consistency.</li><li><b>Passionate about crafting intuitive user interfaces</b> that deliver a seamless and engaging user experience.</li><li>Adept at <b>translating design concepts into high-performance, pixel-perfect implementations</b>.</li></ul>',
    },
    {
        designation: 'Frontend Course',
        company: 'Prepbytes',
        date: 'September 2021 - January 2022',
        link:'https://www.prepbytes.com/',
        icon:'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp',
        description: '<ul><li>Familiar with <b>HTML, CSS, and JavaScript</b>, focusing on <b>clean code, responsive design, and cross-browser compatibility</b>.</li><li>Skilled in <b>Git version control</b> and familiar with front-end frameworks like <b>React</b>.</li><li>Emphasized <b>performance optimization and accessibility</b>, showcasing abilities through a diverse portfolio.</li><li>Committed to <b>continuous learning, problem-solving, and effective communication</b> in team environments.</li></ul>',
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
        svg: <Email color='white' />,
        icon: 'https://res.cloudinary.com/dpyrylw7s/image/upload/v1740774110/Blogs/grq4wsxkn4rjq9jc3eo6.gif',
        iconThumb: 'https://res.cloudinary.com/dpyrylw7s/image/upload/v1740774110/Blogs/oh7eoieqvurhk4kv5nej.gif'
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
        img: 'https://res.cloudinary.com/dpyrylw7s/image/upload/v1706883706/Blogs/award-one_d7zhdt.jpg',
        title: 'Stress Reliever',
        type: 'Reward',
        description: 'Problem solver, someone whose contributions help maintain a smooth workflow',
        link: 'https://res.cloudinary.com/dpyrylw7s/image/upload/v1706883706/Blogs/award-one_d7zhdt.jpg',
    },
    {
        img: 'https://res.cloudinary.com/dpyrylw7s/image/upload/v1706883707/Blogs/award-two_ihrf7l.jpg',
        title: 'Strength builder',
        type: 'Reward',
        description: 'Significant contribution on a subject',
        link: 'https://res.cloudinary.com/dpyrylw7s/image/upload/v1706883707/Blogs/award-two_ihrf7l.jpg',
    },
]

export const AboutMe = [
    {
      skill: "Responsive & User-Centric Design",
      description: "Develops pixel-perfect, accessible, and high-performance UIs that provide seamless user experiences across all devices.",
      icon: Layout,
    },
    {
      skill: "Clean, Efficient, and Scalable Code",
      description: "Writes modular, reusable, and optimized code following industry best practices to ensure maintainability and scalability.",
      icon: Code,
    },
    {
      skill: "Advanced Debugging & Problem-Solving",
      description: "Effectively identifies, troubleshoots, and resolves complex frontend issues, optimizing performance and user experience.",
      icon: Cpu,
    },
    {
      skill: "SEO-Friendly Development",
      description: "Implements SEO best practices, including semantic HTML, structured data, and performance optimizations to improve search visibility.",
      icon: Search,
    },
    {
      skill: "Strong Collaboration & Communication",
      description: "Works seamlessly within cross-functional teams, translating business needs into elegant frontend solutions while ensuring clear communication.",
      icon: Profile,
    },
    {
      skill: "Continuous Learning & Technology Adaptation",
      description: "Stays ahead of industry trends, rapidly adapting to new frameworks, tools, and best practices to enhance development workflows.",
      icon: OpenBook,
    },
  ];
  