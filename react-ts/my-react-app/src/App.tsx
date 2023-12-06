import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import SelectionPage from './components/SelectionPage';
import './App.css';
import facial from './img/facials.jpg'
import dermalfillers from './img/dermalFillers.jpg'
import harmony from './img/harmonyCA.jpg'
import profilo from './img/profhilo.jpg'
import therapy from './img/sceloretherapy.jpg'
import led from './img/led.jpg'
import fatD from './img/fatDissolve.jpg'
import growth from './img/growthFactors.jpg'
import packagee from './img/timeClinic.jpg'
import concultation from './img/consultation.jpg'


const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { label: 'Dermal Filler', imageSrc: dermalfillers },
    { label: 'Secret RF', imageSrc: facial },
    { label: 'HArmony CA', imageSrc: harmony },
    { label: 'Profhilo', imageSrc: profilo},
    { label: 'Facials', imageSrc: facial },
    { label: 'Sclerotherapy', imageSrc:therapy },
    { label: 'LED', imageSrc: led },
    { label: 'Fat Dissolve', imageSrc:fatD },
    { label: 'Growth Factors', imageSrc: growth },
    { label: 'Special Package for Time Clinic', imageSrc:packagee },
    { label: 'Consultation', imageSrc: concultation },
  ];  

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setCurrentStep('2/2');
  };

  const handleGoBack = () => {
    setSelectedOption('');
    setCurrentStep('1/2');
  };

  return (
    <div>
      <div className="header">
        <Header currentStep={currentStep} />
      </div>
      <div className="container">
        {selectedOption ? (
          <SelectionPage selectedOption={selectedOption} goBack={handleGoBack} />
        ) : (
          <>
          <Body options={options} onSelectOption={handleSelectOption} />

          <div className='container-needs'>
          <h4> Not sure about concultation type? Please, call   
                <span style={{marginLeft: '7px'}}>
                    02037959063
                </span>
          </h4>
        </div>
        </>
        )}
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
