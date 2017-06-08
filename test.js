// Our Lambda function fle is required 
var importify = require('./index.js');

// The Lambda context "done" function is called when complete with/without error
var context = {
    done: function (err, result) {
        console.log('------------');
        console.log('Context done');
        console.log('   error:', err);
        console.log('   result:', result);
    }
};

// Simulated S3 bucket event
var event = {
  "session": {
    "sessionId": "SessionId.f820a2f6-10f2-4aa7-bbf3-0a715201dc2e",
    "application": {
      "applicationId": "amzn1.ask.skill.80b09d1b-457f-481c-bb19-00f5c14d165e"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AGOAUT2PJKYRU7JLNW2S3F4QRNH2EZJO2UQV3SW4SKIRQFOXA5DFS6DGWKDJ3LEC3O2ZTW7GZBEKYJPVHTHEC7XZ32RDBG447PQEISEWAPDDLQKWBSDSC6IDXXSVBHZEYQ3Q37WST2AUUJZB7FFUQ6FZQOZ5YIWDX3Q22HJJQ77EJFSCK7SFOKRIROWBZICHTNYWAD3AVJR56GA"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.ff891d47-5c1c-4a94-859d-41913c2a0293",
    "locale": "en-US",
    "timestamp": "2017-06-08T16:47:58Z",
    "intent": {
      "name": "GetNewFactIntent",
      "slots": {
        "SignName": {
          "name": "SignName",
          "value": "libra"
        }
      }
    }
  },
  "version": "1.0"
};

importify.handler(event, context);
