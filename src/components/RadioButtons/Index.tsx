// DynamicRadioButtons.js

import React, { useState } from 'react';

const options = ['Option 1', 'Option 2', 'Option 3'];

function DynamicRadioButtons() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option: any, index: number) => (
        <label key={index}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </label>
      ))}
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default DynamicRadioButtons;
