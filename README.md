# Form Builder

This is the Form Builder Web-App, this Web-App was built using React, Node and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Please notice that in order to run the project you must have MongoDB installed on your machine.
For installation instructions go to:
https://docs.mongodb.com/manual/administration/install-community/


### Installing

Clone the repo to your local machine and open two command prompts.
On the first command prompt, enter the server directory and type 'nodemon server.js'.

```
> cd server
\server> nodemon server.js
```

On the second command prompt, enter the client directory and type 'npm start'.

```
> cd client
\client> npm start
```

In this point the Web-App should be running on your browser.
If not, enter your browser on http://localhost:3000/

## Notes

Please note that although I put much effort in making the project, time was limited and though I'm proud of the final product,
there are some things that could've be written in a more elegant way.
Plus there could be some improvements such as:
* Adding options to limit maximum characters in a field.
* Treating long inputs throughout the project and more input tests overall.
* Adding pagination for large number of forms or fields.
