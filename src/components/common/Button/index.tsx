import React from 'react';
import './Button.css';
import { Loader, RightTiltedArrow } from '../../../assets/svg/svg';

interface ButtonProps {
    size?: string;
    text?: string;
    onClick?: () => void;
    loader?: Boolean;
    color?: string;
    style?: any;
    svg?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ size = 'medium', text = 'Button', loader = false, onClick, color, style, svg = false }) => {
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
                {svg ?
                    <RightTiltedArrow className='btnSvg' color='white' />
                    :
                    <></>
                }
            </button>
        </>
    )
};

export default Button;
