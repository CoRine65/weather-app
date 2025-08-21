# weather-app

TOP project link: https://www.theodinproject.com/lessons/javascript-weather-app
previous lessons: 
- Asynchronous code
- working with APIs
- Async and await

Goal of this lesson is to use asynchronous code to fetch and interact with APIs for data retrieval. 

--------Project start

1. Github repo
2. Initialze npm -y 
3. Install Webpack + friends
 - npm install --save-dev webpack webpack-cli webpack-dev-server
4. Install ESLint + Prettier
- npm install --save-dev eslint prettier eslint-config-prettier
5. Set up folder structure
- src and dist
6. Config webpack.config.js
7. Update package.json
8. configure ESLint
9. configure prettier
10. hmtl plug in
--- to do: 
11. test code
- initial test: minimul fetch
- remember to encrypt API key
    - install dotenv
        - npm install --save-dev dotenv-webpack
[ERROR]: forgot to install npm install --save-dev style-loader css-loader
[ERROR]: get problem: trailing semicolon in the encryption of the API key.
12. run npm start > npm run build
------------ commit : build ----------

13. Display plain weather information
14. Creating displays and inputs for custom weather information
- updating the index.js to grab the containers and inputs
- add event listener
[Testing]: FAILED
[ERROR]: did not update the URL.
NOTE: be more thorough in reading. 
-------- commit-----------------

15. Input validation
- user can not submit empty strings
- invalid cities
NOTE: felt off and inaccurate, 
- added: requre City, State and Country
- display what the API is sending back
----------- Commit -------------------
16. Showing extra weather details: humidity, wind, feels-like
- weather icons
- keeping display clean and readable
17. Adding some styling
----- commit ----------------------------
- added a fade in transition
18. More UI customizations
- spinner
- gradient based on temperature
------ commit -------------------------