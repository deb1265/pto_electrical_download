import React, { useState, useEffect } from 'react';

function App() {
  const [maincodeOutput, setMaincodeOutput] = useState('');

  useEffect(() => {
    // Fetch the output when the component mounts
    fetch('/run-maincode')
      .then(response => response.text())
      .then(output => {
        setMaincodeOutput(output);
      });
  }, []);

  return (
    <div className="App">
      <h1>Maincode.js Output:</h1>
      <pre>{maincodeOutput}</pre>
    </div>
  );
}

export default App;

