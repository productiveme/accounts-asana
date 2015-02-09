Meteor.loginWithAsana = function(options, callback) {
	var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
	Asana.requestCredential(options, credentialRequestCompleteCallback);
};
