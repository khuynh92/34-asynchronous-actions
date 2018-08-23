[![Build Status](https://travis-ci.com/khuynh92/34-asynchronous-actions.svg?branch=master)](https://travis-ci.com/khuynh92/34-asynchronous-actions)

heroku: http://khoa-34-asynchronous-actions.herokuapp.com  
PR: https://github.com/khuynh92/33-redux-middleware/pull/1  
Travis: https://travis-ci.com/khuynh92/33-redux-middleware    

# LAB 34-asynchronous-actions

This project is the front end side for LAB-14. Lab 34 demo can be seen on the heroku link above, or downloaded to be run locally. 

This project utilizes MONGODB as a database for storing pizzas, and React for the front facing app.

## To install
Download this repo and in the root directory, type in to the CLI `npm i` to install all dependencies 

## To Run
#### Backend
To run this app locally, you need to first start the backend folder.
Full details on backend installation in backend/README.md.

To Quickstart, cd into the backend folder, and `npm i`. afterwords. Next you need to create a .env file with a `PORT` and `MONGODB_URI` INSIDE the backend folder. you need to start a mongo server on your computer and then type in `npm start `.

####Frontend
Create a .env folder with a `PORT`.

Type in `npm i` to install all dependencies.

Type into the cli of the root directory `npm run watch` to start the react app. A new window will open in your default browser

## How To Use the App
Upon load, the app will preload any pre-existing that is in your mongo database.

To add a new Pizza, give a name and toppings. Error middleware will kick in if fields are left empty

You can view the toppings for each Pizza by clicking the pizza name. Notice that in your URL bar that you will be redirected to that pizza's page. 

To edit a pizza, double click on the name.

To Delete, click on the x next to the pizza.
