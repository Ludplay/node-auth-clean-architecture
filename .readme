# Project Title
Node.js API with Auth and Clean Architecture

## Description
REST API built with Node.js and Express implementing authentication with JWT, password hashing with bcrypt, Clean Architecture principles, request validation middleware, MySQL persistence with Sequelize, and unit tests.

This project was created to demonstrate scalable backend structure, maintainability, and secure authentication flows.

## Features
User registration
User login with JWT token generation
Protected routes using Bearer Token authentication
User CRUD operations
Validation middleware using schema rules
Password hashing with bcrypt
Clean Architecture / SOLID principles
Unit tests

## Technologies
Node.js
Express
jsonwebtoken
Bcrypt
MySQL
Sequelize
Mocha
Sinon

## Architecture
src/
 adapters/ -> repository implementations
 controllers/ -> HTTP controllers 
 docs/ -> Postman collection entities/ -> domain entities infra/ -> express app, routes, middlewares, database, DI container 
 interactors/ -> use cases / business rules
 services/ -> token and hash services
 validators/ -> schemas and validation logic
tests/ -> unit tests

### Installation
npm install

### Run Application
npm run dev
npm start

### Run Tests
npm test

## Getting started
1) Start MySQL database.

2) Run Sequelize migrations.

3) Access health route:
    GET /index

4) Authenticate user:
    POST /login
    
5) Use returned token in protected routes:
    Authorization: Bearer <token>
