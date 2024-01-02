# Node.js Stress Testing App

This is a simple Node.js application for stress testing CPU and memory using the `stress-ng` tool. It provides endpoints to stress the CPU, stress memory, and calm the system.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node.js package manager) installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-node-stress-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-node-stress-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the application:

   ```bash
   npm start
   ```

2. Access the following endpoints:

   - **Stress CPU:** http://localhost:3000/stress-cpu
   - **Stress Memory:** http://localhost:3000/stress-memory
   - **Calm:** http://localhost:3000/calm

3. Monitor the console output for CPU and memory usage information.

## Stopping the Stress Processes

To stop the stress processes, access the following endpoint:

- **Calm:** http://localhost:3000/calm

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
