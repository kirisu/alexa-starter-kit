var AlexaSkill = require('./AlexaSkill');

const APP_ID = undefined;

const App = () => {
  AlexaSkill.call(this, APP_ID);
};

App.prototype = Object.create(AlexaSkill.prototype);
App.prototype.constructor = App;

App.prototype.eventHandlers.onSessionStarted = (sessionStartedRequest, session) => {
};

App.prototype.eventHandlers.onLaunch = (launchRequest, session, response) => {
};

App.prototype.eventHandlers.onSessionEnded = (sessionEndedRequest, session) => {
};

App.prototype.intentHandlers = {
  "AMAZON.HelpIntent": (intent, session, response) => {
  }
};
