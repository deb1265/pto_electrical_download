const express = require('express');
const { execFileSync } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static('build'));

// Endpoint to execute maincode.js and get the output
app.get('/run-maincode', (req, res) => {
  try {
    // Replace './maincode.js' with the correct path to your file
    const output = execFileSync('node', ['./maincode.js'], { encoding: 'utf-8' });
    res.send(output);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
