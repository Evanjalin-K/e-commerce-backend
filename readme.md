## **E-Commerce Application**

1. This is the simple e-commerce application that allows user to view product, add product to the cart , and checkout. 
2. The admin can manage products, users and orders.

3. The application is built using the following technologies:

   1. Frontend : React, Axios, React-router-dom Ver6, Bootstrap, Redux.

   2. Backend: Node.js, Express.js, MongoDB, JWT, Bcrypt, Multer, Nodemailer, Nodemon, Dotenv, Morgon, Cors, cookie-parser.

   3. Tools: Postman, VScode, Git, GitHub, Netlify, Render, Vite.

   Steps:
   
   Backend:

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
