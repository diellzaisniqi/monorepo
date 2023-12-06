// src/components/SelectionPage.tsx
import React from 'react';

interface SelectionPageProps {
  selectedOption: string;
  goBack: () => void;
}

const SelectionPage: React.FC<SelectionPageProps> = ({ selectedOption, goBack }) => {
  return (
    <div>
      <h2>{`Selected Option: ${selectedOption}`}</h2>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default SelectionPage;
