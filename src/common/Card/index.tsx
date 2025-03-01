import React, { useState } from 'react';
import './Cards.css';
import Button from '../Button';

interface CardsProps {
    image?: string;
    title?: string;
    type?: string;
    btnText?: string;
    description?: string;
    onClick?: () => void;
    btn?: boolean;
}

const Cards: React.FunctionComponent<CardsProps> = ({ image, title, type, description, onClick, btn = true, btnText }) => {
    const [onHover, setOnHover] = useState(false);

    return (
        <div className='card-wrapper'
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onTouchStart={() => setOnHover(true)}
            onTouchEnd={() => setOnHover(false)}
        >
            <div className='card-img-container'>
                <img loading='lazy' src={image} alt="Card" />
            </div>
            <div className={`card-description-container ${onHover ? 'card-description-hover' : 'card-description-not-hover'}`}>
                <div className='card-title-container'>
                    <p className='card-title'>{title}</p>
                    <p className='card-date'>{type}</p>
                </div>
                <div className='card-description'>{description}</div>
                {btn ?
                    <Button svg={true} text={btnText} size='medium' color='orange' onClick={onClick} />
                    :
                    <></>
                }
            </div>
        </div>
    );
};

export default Cards;
