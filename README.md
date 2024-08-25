# Image Upload to MinIO with RabbitMQ for Messaging Queue

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction
This project demonstrates how to upload images to MinIO using Multer in an Express.js application, and how to implement a messaging queue using RabbitMQ to handle asynchronous events. MinIO is a high-performance, S3-compatible object storage, while RabbitMQ is a reliable messaging broker. Multer is a middleware for handling `multipart/form-data`, which is primarily used for uploading files.

## Features
- Asynchronous messaging using RabbitMQ for processing image upload events.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v16 or v18 preferred)
- MinIO server (running and accessible)
- RabbitMQ server (running and accessible)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MinIO and RabbitMQ configuration:
    ```env
    MINIO_END_POINT=host
    MINIO_PORT=9000
    MINIO_ACCESS_KEY=youraccesskey
    MINIO_SECRET_KEY=yoursecretkey
    MINIO_BUCKET_NAME=yourbucketname

    RABBITMQ_URL=amqp://your_rabbitmq_host
    RABBITMQ_QUEUE=your_queue_name
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```

2. Use an API client (like Postman) to test the endpoints.

3. RabbitMQ will handle image upload events asynchronously. Ensure RabbitMQ is running and properly configured.

## Project Structure
```plaintext
yourproject
│   .env
│   .gitignore
│   package.json
│   README.md
│
└───src
    │   server.js
    │
    ├───config
    │       minioClient.js
    │       rabbitmqClient.js
    │
    ├───controllers
    │       uploadController.js      
    │
    ├───routes
    │       secured.route.js
    │
    ├───middlewares
    │       multerConfig.js
    │
    └───rabbitmq
            consumer.js
            producer.js