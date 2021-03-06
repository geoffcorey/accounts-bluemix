Accounts.oauth.registerService('bluemix');

if (Meteor.isClient) {
  Meteor.loginWithBluemix = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Bluemix.requestCredential(options, credentialRequestCompleteCallback);
  }
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.bluemix'],
    forOtherUsers: ['services.bluemix.username']
  });
}
