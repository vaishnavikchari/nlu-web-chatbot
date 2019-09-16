# React chatbot for Dialogflow hosted on firebase

# Usage:
Find the chatbot demo at: 
https://earthenpot.org/faq-chatbot

# Spec
* Bootstrapped the Reactjs frontend with Create React App (https://www.npmjs.com/package/create-react-app)
* Used React Simple Chatbot on npm by Lucas Bassetti for frontend. Also at: https://github.com/LucasBassetti/react-simple-chatbot
* Used Nodejs, Express API on Google cloud functions of Firebase, to communicate with Google's dialogflow api for natural language understanding (https://www.npmjs.com/package/dialogflow)
* Replace /functions/data/googleDialogflowPrivateKeyFile.json file with your private key file. Also don't forget to point the environment variable: process.env.GOOGLE_APPLICATION_CREDENTIALS in /functions/index.js to the your private key file name. Reference: https://dialogflow.com/docs/reference/v2-auth-setup