
# PROPERTY PRO-LITE

## Property-Pro-Lite-API

Property Pro Lite is a platform where people can create and/or search properties for sale or rent

[![Build Status](https://travis-ci.org/Ayesiza/Property-Pro-Lite-API.svg?branch=develop)](https://travis-ci.org/Ayesiza/Property-Pro-Lite-API)
[![Coverage Status](https://coveralls.io/repos/github/Ayesiza/Property-Pro-Lite-API/badge.svg?branch=develop)](https://coveralls.io/github/Ayesiza/Property-Pro-Lite-API?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/583cc10e88753aa2bfc1/maintainability)](https://codeclimate.com/github/Ayesiza/Property-Pro-Lite-API/maintainability)

## Language used

Javascript/Nodejs

###### server-side frameworks

Node/Express

## Install

Before you install the software make sure you have the following already installed on your machine

`run npm install` to install the node packages

Have Nodemon installed globally by running `npm i nodemon -g`

## Run the app

A step by step examples on how to get application development environment running

1. run  `npm i`

To install all the necessary packages on your local computer

To start your sever `npm start`

This will start your application and run on port 3000

## Run the tests

The following are install

Mocha/chai 

should

supertest

run  `npm run test` 

## API methods and routes

`POST /api/v1/users/auth/signup`

`POST /api/v1/users/auth/signIn`

`POST /api/v1/property`

`GET /api/v1/propertys`

`GET /api/v1/property/:id`

`GET /api/v1/property?type=3bedroom`

`patch /api/v1/property/:id/`

`PATCH /api/v1/property/:id/sold`

`DELETE /api/v1/property/:id`

### API methods above must perform the following Endpoints 

○ User can sign up.

○ User can sign in.

○ User (agent) can post a property advert.

○ User (agent) can update the details of a property advert.

○ User (agent) can mark his/her posted advert as sold.

○ User (agent) can delete an advert.

○ User can view all properties.

○ User can view all properties of a specific type - 2 bedroom, 3 bedroom, mini flat

○ User can view a specific property

#### Pivotal Tracker story board

https://www.pivotaltracker.com/n/projects/2354151

#### gh-pages for UI

https://ayesiza.github.io/Property-Pro-lite/


### status codes used

###### Success Response:

code: 200 OK

code: 201 CREATED

####### Error Response:

Code: 404 NOT FOUND 

Content: { error : "User withwrong details" }

Code: 400 BAD REQUEST

Content: { error : "User doesn't exist" }

Code: 401 UNAUTHORIZED 

Content: { error : "You are unauthorized to make this request." }

Code: 405 METHOD NOT ALLOWED

Content: { error : "user used wrong method." }

#### server Error

code: 500 INTERNAL SERVER ERROR








