## **E-Commerce Application**

1. This is the simple e-commerce application that allows user to view product, add product to the cart , and checkout. 
2. The admin can manage products, users and orders.

3. The application is built using the following technologies:

   1. Frontend : React, Axios, React-router-dom Ver6, Bootstrap, Redux.

   2. Backend: Node.js, Express.js, MongoDB, JWT, Bcrypt, Multer, Nodemailer, Nodemon, Dotenv, Morgon, Cors, cookie-parser.

   3. Tools: Postman, VScode, Git, GitHub, Netlify, Render, Vite.

   Steps:
   
### Backend:

1. Create an empty directory and open it in VS Code.
2. Open the terminal and run the following command to create a package.json file:

   ```
   npm init
   ```
3. Create an entry point file (index.js).
4. Configure the package.json file. Add the follwing code:

   ```
   "scripts": {
    "start": "node index.js"
   }
    ```
5. Create a readme.md file and add the project description.
6. Create an empty repository in GitHub.Com. Copy the repository URL.
7. Initialize the git repository in the project directory:
    ```
    git init
    ```
8. Add the remote repository Url:
    ```
    git remote add origin <repository-url>
    ```
9. Create a .gitignore file and add the following code:

    ```
    node_modules
    package-lock.json
    DS_Store
    .env
    ```
10. Rename the default branch from master to main:

    ```
    git-branch -m main
    ```
11. Add the changes to the staging area:
    ```
    git add .
    ```
12. Commit the changes:
    ```
    git commit -m "basic backend application setup"
    ```
13. Push the changes to the remote repository:
    ```
    git push -u origin main

### Database setup
 1. Visit MongoDB.com and create an account.
 2. Create a new project and cluster.
 3. Create a new user and password.
 4. Open database access if neccessary to change the user credentials and privileges.
 5. Open network access tp allow connections from anywhere by adding the IP address 0.0.0.0/0.
 6. Create new database and a collection.
 7. Copy the connecting string from the cluster.
 8. Install MongoDB compass and connect to the database using the connecting string.

 From the backend, connect to thr database:

 1. Copy the connection string from the  cluster.
 2. Install mongoose:
 ```
 npm install mongoose
 ```
 3. In the index.js file, add the following code:

 ```
 const mongoose = require('mongoose');
 mongoose.connect(connection_string);
```
 4. Install dotenv
 ```
 npm install dotenv
 ```
 5. Create a .env file and add the connection string:

 ```
 MONGODB_URI=connection_string
 ```
 6. Require the dotenv package in the index.js file:

 ```
 require('dotenv').config();
 ```
 7. Change the connection stirng in index.js inside mongoose.connect() function to
 ```
 process.env.MONGODB_URI
```
8. Add the .env file to the .gitignore file.
9. Create a config.js file under the utils folter and add the following code:
```
require('dotenv').config();
 const MONGODB_URI=process.env.MONGODB_URI;

 module.exports = {
    MONGODB_URI
 };
 ```
 10. Rrquire the config.js file in the index.js file:
 ```
 const { MONGODB_URI } = require('./utils/config');
```
11. Update the variable process.env.MONGODB_URI to MONGODB_URI in the mongoose.connect() function.

### Connect to the server using express.js

