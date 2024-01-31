import React from 'react';
import './Blogs.css';
import Cards from '../common/Card';
import { GetBlogs } from '../../constants';
import { PageHeadings } from '../common/GenericeFunction';
import { useNavigate } from 'react-router-dom';

interface Blog {
    img: string;
    title: string;
    type: string;
    description: string;
    link: string;
}

const Blogs: React.FunctionComponent = () => {
    const navigate = useNavigate();

    const onClickHandler = (link: string, type: string) => {
        if (type === 'Blog') {
            navigate(link)
        } else {
            window.open(link, '_blank');
        }
    }

    return (
        <section id='Blogs' className='blog-wrapper'>
            <div className='blog-container'>
                <PageHeadings heading={'Blog and Rewards'} subHeading={'Learn and grow'} />
                <div className='blog-list-container'>
                    {GetBlogs.map((blog: Blog, index: number) => {
                        const btnText = blog.type === 'Blog' ? 'Learn more' : 'View'
                        return (
                            <div className={`${index % 2 === 0 ? '' : 'blog-card-alignment'}`} key={index}>
                                <Cards
                                    btnText={btnText}
                                    image={blog.img}
                                    title={blog.title}
                                    type={blog.type}
                                    description={blog.description}
                                    onClick={() => onClickHandler(blog.link, blog.type)}
                                    btn={blog.link ? true : false}
                                />

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
