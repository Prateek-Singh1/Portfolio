import React, { useEffect } from 'react';
import './PopupLayout.css';
import { CloseIcon } from '../../../assets/svg/svg';

interface PopupLayoutProps {
    children: React.ReactElement;
    onClose: () => void;
}

const PopupLayout: React.FunctionComponent<PopupLayoutProps> = ({ children, onClose }) => {
    useEffect(() => {
        document.body.classList.add('disable-background-scroll');
        return () => {
            document.body.classList.remove('disable-background-scroll');
        };
    }, []);

    return (
        <section id='popup-layout' className='popup-layout-wrapper'>
            <div className='popup-layout-container'>
                <div className='popup-layout-body'>
                    <div className='popup-layout-close' onClick={onClose}><CloseIcon /></div>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default PopupLayout;
