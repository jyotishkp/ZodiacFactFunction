'use strict';
var Alexa = require('alexa-sdk');
const recipes = require('./recipes');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.80b09d1b-457f-481c-bb19-00f5c14d165e";

var SKILL_NAME = "Zodiac Fact";
var HELP_MESSAGE = "You can say tell me a zodiac fact about Libra, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const itemSlot = this.event.request.intent.slots.SignName;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }
        // console.log(itemName);
        // console.log(recipes[itemName]);
        // console.log(recipes[itemName].length);

        var factIndex = Math.floor(Math.random() * recipes[itemName].length);
        var randomFact = recipes[itemName][factIndex];
        var speechOutput = recipes[itemName][factIndex];
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};