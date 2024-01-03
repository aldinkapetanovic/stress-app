// Import required modules using ES6 syntax
import express from 'express';
import os from 'os';
import { exec } from 'child_process';

// Create an Express application
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Define the endpoints

app.get('/stress-cpu', (req, res) => {
  const cpuCores = os.cpus().length;
  const cpuLimit = Math.ceil(cpuCores * 0.9);

  // Stress CPU using the "stress-ng" tool
  const stressProcess = exec(`stress-ng --cpu ${cpuLimit} --timeout 60s`);

  stressProcess.stdout.on('data', (data) => {
    console.log(`CPU Usage: ${data}`);
  });

  stressProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });

  stressProcess.on('close', (code) => {
    console.log(`Stress process exited with code ${code}`);
    res.send(`Stressing CPU with ${cpuLimit} cores...`);
  });
});

app.get('/stress-memory', (req, res) => {
  const totalMemory = os.totalmem() / (1024 * 1024);
  const memoryLimit = Math.ceil(totalMemory * 0.9);

  // Stress memory using the "stress-ng" tool
  const stressProcess = exec(`stress-ng --vm 2 --vm-bytes ${memoryLimit}M --timeout 60s`);

  stressProcess.stdout.on('data', (data) => {
    console.log(`Memory Usage: ${data}`);
  });

  stressProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });

  stressProcess.on('close', (code) => {
    console.log(`Stress process exited with code ${code}`);
    res.send(`Stressing Memory with a limit of ${memoryLimit} MB...`);
  });
});

app.get('/calm', (req, res) => {
  // Stop the stress processes
  exec('pkill stress-ng', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }
    console.log('Calm now...');
    res.send('Calm now...');
  });
});

// Set the port for the Express application
const port = process.env.PORT || 3000;

// Start the Express application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
