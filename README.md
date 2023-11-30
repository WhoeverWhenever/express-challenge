Tested via Postman
==================
Purpose of this application: learn about development of web-application server-side.
====================================================================================
How to install it?
You can clone this repository. 
Manual installation:
- enter "npm i express" in terminal in root directory of your project;
- for better experience you should also install nodemon using "npm i nodemon --save-dev";
- create server.js file.
=========================================================================================
How to run it?
- Make sure you have "start-local": "nodemon server.js" in scripts in your package.json.
- Enter "npm run start-local" in terminal.
=========================================================================================
How to use provided routes?
- Open Postman.
- Choose a HTTP-method and write down a URL you need:
    - to retrieve a list of users you need to choose GET method and enter http://localhost:3000/users into URL field
    (hereinafter GET | http://localhost:3000/users)
    - to add a new user you need:
    POST | http://localhost:3000/users/newUser
    also you need to open Body tab, choose "raw" and "JSON" from dropdown lists and enter next data (for example):
    {
        "firstName": "Danny",
        "lastName": "Groover",
        "email": "dannygroover@example.com",
        "password": "somepassword111",
        "age": 15,
        "address": {
            "street": "15 Void St",
            "city": "Hollyside",
            "state": "MM",
            "zip": "224641",
            "country": "USA"
        },
        "createdAt": "2023-04-23T08:12:34:567Z",
        "tags": [
            "Business",
            "Tech"
        ]
    }
    - to retrieve a specific user by their email you need:
    GET | http://localhost:3000/users/dannygroover@example.com
    - to update user's data (in this case it's address) you need: 
    PATCH | http://localhost:3000/users/updateUser/jackleer@example.com
    body (example):
    {
       "city" : "Newtown",
       "state": "OG"
    }
    - to delete a user by their email you need:
    DELETE | http://localhost:3000/users/deleteUser/annadart@example.com
    - to retrieve student statistics you need:
    GET | http://localhost:3000/students
    - to retrieve student with worst score for homework you need:
    GET | http://localhost:3000/students/worstHomework?type=homework
    - to retrieve articles you need:
    GET | http://localhost:3000/articles
    - to add new article you need: 
    POST | http://localhost:3000/articles/addArticle
    body (example):
    {
        "name": "Fivehead article",
            "description": "Beyond this time",
            "type": "AAA",
            "tags": [
                "education",
                "scince"
            ]
    }
    - to update article tags you need:
    PATCH | http://localhost:3000/articles/updateArticle/Express - introduction
    body (example):
    {
       "patch": ["education", "advanced"]
    }