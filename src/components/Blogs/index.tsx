import React, { useState } from 'react';
import './Blogs.css';
import Cards from '../../common/Card';
import { GetBlogs } from '../../constants';
import { PageHeadings } from '../../common/GenericeFunction';
import { useNavigate } from 'react-router-dom';
import Toggle from '../../common/Toggle';

interface Blog {
    img: string;
    title: string;
    type: string;
    description: string;
    link: string;
}

const Blogs: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);

    const onClickHandler = (link: string, type: string) => {
        if (type === 'Blog') {
            navigate(link);
        } else {
            window.open(link, '_blank');
        }
    }

    const handleToggleClicked = () => {
        setIsToggle(!isToggle);
    }

    const filteredBlogs = GetBlogs.filter(blog => (isToggle ? blog.type.toLowerCase() === 'blog' : blog.type.toLowerCase() === 'reward'));

    return (
        <section id='Blogs' className='blog-wrapper'>
            <div className='blog-container'>
                <PageHeadings heading={'Blog and Rewards'} subHeading={'Learn and grow'} />
                <div className='blog-list-toggle-container'>
                    <div className='blog-toggle'>
                        <div className={`blog-toggled-text ${isToggle ? '' : 'not-toggle'}`} onClick={() => setIsToggle(false)}>Rewards</div>
                        <Toggle
                            isChecked={isToggle}
                            onChange={handleToggleClicked}
                            backgroundColor={isToggle ? '#FD853A' : '#321A50'}
                        />
                        <div className={`blog-toggled-text ${isToggle ? 'is-toggle' : ''}`} onClick={() => setIsToggle(true)}>Blog</div>
                    </div>
                    <div className='blog-list-container'>
                        {filteredBlogs.map((blog: Blog, index: number) => {
                            const btnText = blog.type === 'Blog' ? 'Learn more' : 'View';
                            return (
                                <div className={`${index % 2 === 0 ? '' : 'blog-card-alignment'}`} key={index}>
                                    <Cards
                                        btnText={btnText}
                                        image={blog.img}
                                        title={blog.title}
                                        type={blog.type}
                                        description={blog.description}
                                        onClick={() => onClickHandler(blog.link, blog.type)}
                                        btn={true}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
