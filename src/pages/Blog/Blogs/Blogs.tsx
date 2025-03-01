import React, { useState, useEffect } from 'react';
import '../Blog.css';
import { scrollToSection } from '../../../commonFunction';
import poster from '../../../assets/images/seo-hero-image.png';
import { useLocation, useNavigate } from 'react-router-dom';
import leftArrow from '../../../assets/images/left-arrow.png';

interface BlogData {
    blog_title: string;
    blog_content: {
        question: string;
        answer: string;
        image: string;
    }[];
}

const Blogs: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState<BlogData | null>(null);

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
    }, [blogPostSlug]);

    return (
        <section id='seo' className='blog-page-wrapper'>
            <div className='blog-page-header'>
                <img loading="lazy" src={leftArrow} alt='Back' onClick={() => navigate('/')} />
            </div>
            <div className='blog-page-container'>
                <div className='blog-page-question-answer-container'>
                    <img loading="lazy" className='blog-page-hero-image' src={poster} alt='SEO Hero' />
                    <h1 className='blog-page-title'>{blogData?.blog_title}</h1>
                    <div className='blog-page-info-container'>
                        {blogData?.blog_content.map((seoData, index) => (
                            <div id={seoData.question} className='blog-page-info' key={index}>
                                <div className='blogTitle'>{seoData.question}</div>
                                <div className='blogDescription'>{seoData.answer}</div>
                                {seoData.image ?
                                    <img loading="lazy" className='blog-page-hero-image' src={seoData.image} alt={seoData.question} />
                                    :
                                    <></>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className='blog-page-question-container'>
                    <div className='blog-page-question'>
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
