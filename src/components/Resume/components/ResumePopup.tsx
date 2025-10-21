import React from "react";
import PopupLayout from "../../../common/PopupLayout";
import Button from "../../../common/Button";
import resume from "../../../assets/docs/Prateek-Singh-Resume.pdf";

interface ResumePopupProps {
  heading: string;
  subHeading: string;
  onClose: () => void;
}

const ResumePopup: React.FC<ResumePopupProps> = ({
  heading,
  subHeading,
  onClose,
}) => {
  const handleDownload = () => {
    const downloadUrl = resume;
    window.open(downloadUrl, "_blank");
  };

  const handlePreview = () => {
    const previewUrl = resume;
    window.open(previewUrl, "_blank");
  };
  return (
    <>
      <PopupLayout onClose={onClose}>
        <section className="resume-popup-wrapper">
          <div className="resume-popup-heading text-[#333] dark:text-white">
            {heading}
          </div>
          <div className="resume-popup-sub-heading text-[#757575] dark:text-[#808080]">
            {subHeading}
          </div>
          <div className="resume-popup-button-conatiner">
            <Button
              text="Download"
              color="orange"
              size="medium"
              onClick={handleDownload}
            />
            <Button
              text="Preview"
              color="gray"
              size="medium"
              onClick={handlePreview}
            />
          </div>
        </section>
      </PopupLayout>
    </>
  );
};

export default ResumePopup;
