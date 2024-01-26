import React from 'react'
import PopupLayout from '../../common/PopupLayout'
import Button from '../../common/Button'

interface ResumePopupProps {
    heading: string;
    subHeading: string;
    onClose: () => void;
}

const ResumePopup: React.FC<ResumePopupProps> = ({ heading, subHeading, onClose }) => {
    const handleDownload = () => {
        const downloadUrl = 'https://example.com/path/to/your/resume.pdf';
        window.open(downloadUrl, '_blank');
    };

    const handlePreview = () => {
        const previewUrl = 'https://example.com/path/to/your/resume.pdf';
        window.open(previewUrl, '_blank');
    };
    return (
        <PopupLayout onClose={onClose}>
            <section className='resume-popup-wrapper'>
                <div className='resume-popup-heading'>
                    {heading}
                </div>
                <div className='resume-popup-sub-heading'>
                    {subHeading}
                </div>
                <div className='resume-popup-button-conatiner'>
                    <Button text='Download' color='orange' size='medium' onClick={handleDownload} />
                    <Button text='Preview' color='gray' size='medium' onClick={handlePreview} />
                </div>
            </section>
        </PopupLayout>
    )
}

export default ResumePopup