# React chatbot for Dialogflow hosted on firebase

# Usage:
Find the chatbot demo at: 
https://wordofbot.firebaseapp.com

# Please note: 
** The links to website from chat are fictitious, so do not return a web page. **

# Spec & Clone instructions: 
* Uses Google Dialogflow for natural language understanding. Reference: https://dialogflow.com
* Uses Create React App (https://www.npmjs.com/package/create-react-app) to bootstrap Reactjs frontend
* Uses react-simple-chatbot on npm by Lucas Bassetti for frontend. Also at: https://github.com/LucasBassetti/react-simple-chatbot
* Uses Nodejs, Express API on Google cloud functions of Firebase, to communicate with Google's dialogflow api for natural language understanding (https://www.npmjs.com/package/dialogflow)
* Replace /functions/data/googleDialogflowPrivateKeyFile.json file with your private key file. Also don't forget to point the environment variable: process.env.GOOGLE_APPLICATION_CREDENTIALS in /functions/index.js to the your private key file name. Reference: https://dialogflow.com/docs/reference/v2-auth-setup
* Replace <URLofCloudfunction> in /src/index.js with the URL to your cloud function
* Include your web app's Firebase configuration as a script in /public/index.html if needed. Reference: https://firebase.google.com/docs/web/setup
* Here's an excellent deployment guide for your reference: https://github.com/cjmyles/firebase-react-express
