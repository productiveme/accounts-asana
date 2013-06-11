Meteor.loginWithAsana = function(options, callback) {
	var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
	Asana.requestCredential(options, credentialRequestCompleteCallback);
};

// (function () {
// 	Meteor.loginWithAsana = function (options, callback) {
// 		if (!callback && typeof options === 'function') {
// 			callback = options;
// 			options = {};
// 		} else if (!options) {
// 			options = {};
// 		}

// 		var config = Accounts.loginServiceConfiguration.findOne({service: 'asana'});
// 		if (!config) {
// 			callback && callback(new Accounts.ConfigError("Service not configured"));
// 			return;
// 		}
// 		var state = Meteor.uuid();
		
// 		var required_scope = ['user'];
// 		var scope = [];
// 		if (Accounts.asana._options && Accounts.asana._options.scope)
// 			scope = Accounts.asana._options.scope;
// 		scope = _.union(scope, required_scope);
// 		var flat_scope = _.map(scope, encodeURIComponent).join('+');
		
// 		var loginUrl =
// 		      'https://app.asana.com/-/oauth_authorize' +
// 		      '?client_id=' + config.clientId +
// 		      // '&scope=' + flat_scope +
// 		      '&response_type=code' +
// 		      '&redirect_uri=' + Meteor.absoluteUrl('_oauth/asana?close') +
// 		      '&state=' + state;
		
// 		Accounts.oauth.initiateLogin(state, loginUrl, callback);
// 	};
// }) ();
