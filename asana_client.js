(function () {
	Meteor.loginWithAsana = function (callback) {
		var config = Meteor.accounts.configuration.findOne({service: 'asana'});
		if (!config) {
			callback && callback(new Meteor.accounts.ConfigError("Service not configured"));
			return;
		}
		var state = Meteor.uuid();
		
		var required_scope = ['user'];
		var scope = [];
		if (Meteor.accounts.asana._options && Meteor.accounts.asana._options.scope)
			scope = Meteor.accounts.asana._options.scope;
		scope = _.union(scope, required_scope);
		var flat_scope = _.map(scope, encodeURIComponent).join('+');
		
		var loginUrl =
		      'https://app.asana.com/-/oauth_authorize' +
		      '?client_id=' + config.clientId +
		      // '&scope=' + flat_scope +
		      '&response_type=code' +
		      '&redirect_uri=' + Meteor.absoluteUrl('_oauth/asana?close') +
		      '&state=' + state;
		
		Meteor.accounts.oauth.initiateLogin(state, loginUrl, callback);
	};
}) ();
