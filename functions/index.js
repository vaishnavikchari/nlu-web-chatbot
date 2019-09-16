const functions = require ('firebase-functions');
const express = require ('express');
const cors = require ('cors');
const path = require ('path');
const dialogflow = require ('dialogflow');
const server = express ();

server.use (cors ());

server.use (express.static (path.join (__dirname, 'build')));
//chat app
server.get ('/', function (req, res) {
  res.sendFile (path.join (__dirname, 'build', 'index.html'));
});

//dialogflow
process.env.GOOGLE_APPLICATION_CREDENTIALS =
  __dirname + '/data/googleDialogflowPrivateKeyFile.json';

server.use (function (req, res, next) {
  res.header ('Access-Control-Allow-Origin', '*');
  res.header (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next ();
});

server.get ('/df', (req, res, next) => {
  var q = decodeURI (req.query.q), session = decodeURI (req.query.sessionId);

  runQuery (q, res, session);
});

/**
 * Send a query to the Dialogflow agent, and return the query result.
 * @param {string} q The question
 * @param {object} res The object to reply the answer
 * @param {string} sId The session identifier
 */
async function runQuery (q, res, sId) {
  // A Dialog Flow / Google Project ID:
  const pId = 'wordofbot';
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient ();
  const sessionPath = sessionClient.sessionPath (pId, sId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: q,
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent (request);
  const result = responses[0].queryResult;

  // Send Result if string.indexOf(substring) !== -1
  res.send (
    JSON.stringify ({data: result.fulfillmentMessages[0].text.text[0]})
  );
}

exports.server = functions.https.onRequest (server);
