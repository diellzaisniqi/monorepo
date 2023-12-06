import React from 'react';
import arrowIcon from '../img/led.jpg';

interface BodyProps {
  options: { label: string; imageSrc: string }[];
  onSelectOption: (option: string) => void;
}

const Body: React.FC<BodyProps> = ({ options, onSelectOption }) => {
  return (
    <div>
      <div className="options-container">
        {options.map((option, index) => (
          <div key={index} className="option-box" onClick={() => onSelectOption(option.label)}>
            <img src={option.imageSrc} alt={option.label} className="option-image" />
            <div className="option-content">
              <div className="option-label">{option.label}</div>
              <span className="arrow-icon">&#8594;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
