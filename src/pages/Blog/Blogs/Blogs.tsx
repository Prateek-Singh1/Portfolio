import React, { useState, useEffect } from 'react';
import '../Blog.css';
import { scrollToSection } from '../../../commonFunction';
import poster from '../../../assets/images/seo-hero-image.png';
import { useLocation, useNavigate } from 'react-router-dom';
import leftArrow from '../../../assets/images/left-arrow.png'

interface BlogData {
    blog_title: string;
    blog_content: {
        question: string;
        answer: string;
    }[];
}

const Blogs: React.FunctionComponent<BlogData> = () => {
    const navigate = useNavigate()
    const [blogData, setBlogData] = useState(null);

    const location = useLocation();
    const blogPostSlug = location.pathname.split('/blogs/')[1];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`../../../../JSON/${blogPostSlug}.json`);
                const data: BlogData = await response.json();
                setBlogData(data);
            } catch (e) {
                console.error('Error fetching data', e);
            }
        };
        fetchData();
    }, []);

    return (
        <section id='seo' className='blog-wrapper'>
            <div className='blog-header' onClick={() => navigate('/home')}>
                <img src={leftArrow} />
            </div>
            <div className='blog-container'>
                <div className='blog-question-answer-container'>
                    <img className='blog-hero-image' src={poster} alt='SEO Hero' />
                    <h1 className='blog-title'>{blogData?.blog_title}</h1>
                    <div className='blog-info-container'>
                        {blogData?.blog_content.map((seoData, index) => (
                            <div id={seoData.question} className='blog-info' key={index}>
                                <div className='blogTitle'>{seoData.question}</div>
                                <div className='blogDescription'>{seoData.answer}</div>
                                <code className='blog-hero-image'>{seoData.image}</code>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='blog-question-container'>
                    <div className='blog-question'>
                        {blogData?.blog_content.map((que) => (
                            <p key={que.question} onClick={() => scrollToSection(que.question, -100)}>
                                {que.question}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
