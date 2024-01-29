import React from 'react';
import './Button.css';
import { Loader } from '../../../assets/svg/svg';

interface ButtonProps {
    size?: string;
    text?: string;
    onClick?: () => void;
    loader?: Boolean;
    color?:string;
    style?: any;
}

const Button: React.FunctionComponent<ButtonProps> = ({ size = 'medium', text = 'Button', loader = false, onClick, color, style }) => {
    const btnSize = `btn-${size}`;
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <>
            <button 
            className={`btn btn-${color} ${btnSize}`} 
            onClick={handleClick}
            style={style}
            >
                {loader ?
                    <Loader size={size} />
                    :
                    text
                }
            </button>
        </>
    )
};

export default Button;
