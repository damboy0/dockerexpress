# Docker Express and React Project

This project consists of two main services: an Express API and a React frontend application, both deployed using Docker.

## Project Structure

- `api/`: Contains the Express API application.
- `myblog/`: Contains the React frontend application.
- `docker-compose.yml`: Defines the services and their configurations for Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. **Clone the Repository**

   ```sh
   git clone <your-repository-url>
   cd dockerexpress

2. **Build and Run the Containers**
    
   ```sh
   docker-compose up --build

This command will build the Docker images and start the containers for both the Express API and the React frontend.


## Stopping the Services
To stop the running containers, press Ctrl+C in the terminal where docker-compose up is running. Alternatively, you can run:

 ```sh
   docker-compose up --build
```

This command will stop and remove the containers.

## License
This project is licensed under the MIT License.