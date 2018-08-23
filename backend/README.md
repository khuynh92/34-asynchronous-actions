
[![Build Status](https://travis-ci.com/khuynh92/13-object-relational-mapping.svg?branch=master)](https://travis-ci.com/khuynh92/14-relationship-modeling)

## 14-relationship-modeling

  Travis: https://travis-ci.com/khuynh92/14-relationship-modeling  
  Heroku: https://khoa-14-relationship-modeling.herokuapp.com  
  PR: https://github.com/khuynh92/14-relationship-modeling/pull/1  

  
in order to run the backend:

 1. in your root folder, create a .env file and set PORT to your desired port.  example: `PORT = 3000` 
 2. in your terminal, locate where you cloned this repository, and then type the command:  
      `npm start`  
 3. in your broswer go to  
`http://localhost:<YOURPORTHERE>`  

 4. Here, you can test different RESTful routes to ensure GET requests are working for `/api/v1/pizza`  
    `http://localhost::<YOURPORTHERE>/api/v1/pizza/<ID>!`   

 5. To test POST, use your choice of tools that makes requests to servers (httpie, postman). Make sure to send an object body, or a 400 error will appear. POST requests will only work on api/v1/pizza.

 6. To test DELETE, use your choice of tools that makes requests to servers (httpie, postman). If no id query is passed, a 404 error will appear. DELETE requests will only work on pathnames with id parameters: `api/v1/pizza/<your id here>`.

 7. To test PUT, use your choice of tools that makes request to servers (httpie, postman). Make sure to send an object body, or a 400 error will appear. Make sure to enter a valid id in the URL, or a 404 error will appear. `api/v1/pizza/<your id here>`


This lab was built off of codefellows 14-object-relational-mapping demo code.
