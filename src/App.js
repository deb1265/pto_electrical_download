import React, { useState, useEffect } from 'react';

const App = () => {
  const [maincodeOutput, setMaincodeOutput] = useState('');

  useEffect(() => {
    const fetchMaincodeOutput = async () => {
      try {
        const response = await fetch('/run-maincode');
        const output = await response.text();
        setMaincodeOutput(output);
      } catch (error) {
        console.error('Failed to fetch maincode output:', error);
        setMaincodeOutput('Error fetching output.');
      }
    };

    fetchMaincodeOutput();
  }, []);

  return (
    <div className="App">
      <h1>Maincode.js Output:</h1>
      <pre>{maincodeOutput}</pre>
    </div>
  );
};

export default App;
