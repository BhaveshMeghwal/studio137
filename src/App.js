import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState([0, 0, 0, 0]);
  const [CurrentOption, setCurrentOption] = useState(0);


  const questions = [
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
    'I have spent fewer than 4 years in full time service or ministry.',
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
    'I have spent fewer than 4 years in full time service or ministry.',
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
    'I have spent fewer than 4 years in full time service or ministry.',
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
    'I have spent fewer than 4 years in full time service or ministry.',
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
    'I have spent fewer than 4 years in full time service or ministry.',
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
    'I have spent fewer than 4 years in full time service or ministry.',
    'I have ambitious aims of making a difference.',
    'My leadership journey has progressed as I anticipated.',
  ];

  const options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

  const handleOptionClick = (optionIndex) => {
    const progressBarIndex = Math.floor(currentQuestionIndex / 5);
    setProgress(prevProgress => {
      const newProgress = [...prevProgress];
      newProgress[progressBarIndex] = Math.min(newProgress[progressBarIndex] + 20, 100); // Increase by 20%, max 100%
      // console.log(optionIndex)
      setCurrentOption(optionIndex)
      return newProgress;
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Survey complete! Thank you for your responses.");
    }
  };

  return (
    <div className="App">
      <div className='container'>

        {/******* Progress Bars on the top ***** */}
        <div className="progress-bar-container">
          {["Idealistic", "Disillusioned", "Cynical", "Hopeful"].map((label, index) => (
            <div key={index} className="progress-bar">
              
              <div className="progress">
                <div className="progress-fill" style={{ width: `${progress[index]}%` }}></div>
              </div>
              <label>{label}</label>
            </div>
          ))}
        </div>

        <div className="question-container">
          <h2 className='question-number'>{currentQuestionIndex}/20</h2>
          <h2>{questions[currentQuestionIndex]}</h2>

        </div>

        {/* *****Slider***** */}
        <div className="slider-container">
          <div className="slider-line">
            {options.map((option, index) => (
              <>
                <div
                  key={index}
                  className="slider-option"
                  onClick={() => handleOptionClick(index)}
                  style={{
                    left: `${(index / (options.length - 1)) * 100}%`,
                  }}
                >
                  <span>{option}</span>
                </div>

                <div
                  className="slider-fill"
                  style={{
                    width: `${(CurrentOption * 25)}%`,
                  }}
                ></div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
