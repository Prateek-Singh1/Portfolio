import React from "react";
import "./AnimatedCardsStyle.css";
// import Button from "../Button";
// import AnimatedButton from "../Button/AnimatedButton";

interface AnimatedCardProps {
  title: string;
  description: string;
  image: string;
  btnText?: string;
  onClick: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  onClick,
  // btnText,
}) => {
  return (
    <>
      <section id="animated-card" className="animated-card-wrapper">
        <img loading="lazy" width="345" height="285" className="img" src={image} alt={title}/>
        <div className="animated-card-textBox" onClick={onClick}>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          {/* <Button
            svg={true}
            text={btnText}
            size="medium"
            color="orange"
            onClick={onClick}
          /> */}
          {/* <AnimatedButton text={btnText} angle="145" onClick={onClick}/> */}
        </div>
      </section>
    </>
  );
};

export default AnimatedCard;
