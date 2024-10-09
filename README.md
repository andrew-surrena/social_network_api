# social_network_api
Practice using MongoDB

## Description

Welcome to Social Network API. This is an API that utilizes MongoDB and allows you to create, read, update and delete Users, add or delete friends of a User, create, read, update and delete Thoughts that are attached to a User, and add or delete reactions to thoughts

While working on this project, I was able to practice utilizing MongoDB as a backend database, as well as the Mongoose Object Data Modeling tool and Express.js for routing.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

To install the Social Network API application, simply download the social_network_api directory from github - [Click to access repo](https://github.com/andrew-surrena/social_network_api)

![photo of file download](./images/Screenshot%202024-10-08%20at%208.44.44 PM.png)

Click "Download ZIP" to access folder

## Usage

To utilize app, start by accessing the folder in your terminal:

![photo of terminal ](./images/Screenshot%202024-10-08%20at%208.49.19 PM.png)

Next, download the necessary modules by running the line: 
```
npm i
```

Now, you can run the application by running the line:
```
npm run start
```

Now the server should be up and running on port 3001 and you'll be able to perform the following API requests utilizing [Insomnia](https://insomnia.rest/):
* *Get* all Users (using route http://localhost:3001/api/users)
* *Get* a single User (using route http://localhost:3001/api/users/*:insertUserId*)
* *Post* a new User (using route http://localhost:3001/api/users)
* *Put* an update for a User (using route http://localhost:3001/api/users/*:insertUserId*)
* *Delete* a User (using route http://localhost:3001/api/users/*:insertUserId*)
* *Post* a new friend to a User (using route http://localhost:3001/api/users/*:insertUserId*/friends/*:insertFriendId*)
* *Delete* a friend from a User (using route http://localhost:3001/api/users/*:insertUserId*/friends/*:insertFriendId*)
* *Get* all Thoughts (using route http://localhost:3001/api/thoughts)
* *Get* a single Thought (using route http://localhost:3001/api/thoughts/*:insertThoughtId*)
* *Post* a new Thought (using route http://localhost:3001/api/thoughts)
* *Put* an update for a Thought (using route http://localhost:3001/api/thoughts/*:insertThoughtId*)
* *Delete* a Thought (using route http://localhost:3001/api/thoughts/*:insertThoughtId*)
* *Post* a new Reaction (using route http://localhost:3001/api/thoughts/*:insertThoughtId*/reactions)
* *Delete* a Reaction (using route /api/thoughts/*:insertthoughtId*/reactions/*:insertReactionId*)

### Access video demo: 

* https://youtu.be/rctac2HHB5I

## Credits
Special thanks to the following instructors for their help:
* Leif Hetland

Starter Code provided by:
* edX Boot Camps LLC

The following technologies were used:
* MongoDB
* Mongoose ODB
* Express
* TypeScript
* Node

## Questions/How to Contribute

If you have any questions please reach out to me at andrewsurrena@gmail.com

You can find my other projects on my github page at https://github.com/andrew-surrena