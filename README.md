# Angular SPA Application

This is an Angular Single Page Application (SPA) that receives large amounts of data with high frequency. The application is designed to receive data in the web-worker from a pseudo-socket and pass it to the main thread. The main thread then renders the incoming data, displaying only the last 10 elements.

## Prerequisites

- Node.js and npm should be installed on your machine

## Getting Started

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Run npm install to install the project dependencies
4. Run npm start to start the application

## Application Structure

The application follows the standard structure of an Angular project. The important files and directories are:

- src/app - Contains the main application components
- src/app/worker - Contains the web-worker pseudo-socket implementation
- src/app/components - Contains the UI components used to render the incoming data
- src/app/services - Contains the service that communicates with the pseudo-socket

## Pseudo-Socket Implementation

The web-worker pseudo-socket implementation can be found in src/app/worker. This implementation generate large amounts of data with high frequency. The data generated in the web-worker is passed to the main thread using postMessage.

## Rendering Incoming Data

The main thread is responsible for rendering the incoming data. Only the last 10 elements are displayed to avoid overwhelming the user interface. The UI components responsible for rendering the incoming data can be found in src/app/components.
