Live Link: https://guestbook-l5nnz.ondigitalocean.app/

# Guestbook App

A simple full stack. Allows users to post anonymous messages and view messages from other users. Messages go through a profanity filter before being accepted.

# Installation

## Database

Deploy a postgres db on the platform of your choosing, and run the following query on it:

```
CREATE TABLE entries ( 
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
entry VARCHAR(30) NOT NULL
); 
```

Make a user with select and insert permissions only.

## Backend

The repo for the backend is here: https://github.com/AceOfHeart5/guestbook-backend. Before running, create a .env file with the following variables:

```
PORT = **********
DATABASE_URL = **********
DB_USER = **********
DB_HOST = **********
DB_DB = **********
DB_PASSWORD = **********
DB_PORT = **********
PROFANITY = curse,words,separated,by,comma
```

Make sure you're using the correct values from the database you setup. This is a node app. If you're running this on a local machine, run `npm install` then `npm start` to get a dev version running.

## Frontend

Finally, clone/download the front end code to your machine. The route for the backend is hard coded into this react app, so you'll need to change it to yours before running. It's line 6 in src/App.js. Once you've done that, start a dev version of this react app with `npm install` then `npm start`.
