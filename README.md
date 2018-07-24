# express-backend 
this repo is a simple boilerplate for express application with basic features as:

# Auth - using passport-mongoose 
this boilerplate built with passport auth with mongo database: 
simply add your login data in the config.js file and uncomment the necessary part from db/mongoos.js
or , use it as is on localhost. 
passport have to get two fields from the client to work: 
**password** // (must be named "password")
**username** // (must be name "username")

# email activation 
on signup the user will get an email to activate their account 
**note** - that require from you to have a domain name or smtp server to send the email. 
simply add the username and the password from your smtp account in the config.js file and you good to go. 
on activation - the user schema in the db will be updated with the value "true" on "active" prop. 
then passport can recognize the user as verified account. 

