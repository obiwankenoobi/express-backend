# express-backend 
Two mani features of this boilerplate are my most pain in the ass features to boilerplate therefore are the ones I decided to include. 

First is of course the ability to authenticate and authorize user. Which we are doing here with `password` and `password-jwt`.

The second is to upload and stream images, simple but pain in the ass to boilerplate on every project.



### `./api/auth.js`
`/api/signup` - route to sign a new user in databe

`/api/login` - route to login and create JWT token to use in protected outes

`/api/private` - route to show how the protected route work

<br>

### `./api/image.js`
`/api/upload-new-media` - route to upload image to db

`/api/get-image/:file_name` - route to get a steam of the image

<br>

### `.env` 

```
MONGO_DB_ADDRESS=<MONGO_ADDRESS>
COOKIE_SECRET=<SECRET>
MONGO_USERNAME=<USERNAME> // if you using with external db
MONGO_PASSWORD=<PASSWORD> // if you using with external db
```

