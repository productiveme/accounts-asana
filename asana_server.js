(function () {
  Accounts.asana.setSecret = function (secret) {
    Accounts.asana._secret = secret;
  };

  Accounts.oauth.registerService('asana', 2, function(query) {

  	var tokenData = getAccessToken(query);
    var accessToken = tokenData.access_token;
    // var refreshToken = tokenData.refresh_token;
    var identity = tokenData.user;
    
    return {
      options: {
		  services: {
			  asana: {
				  id: identity.id, 
				  accessToken: accessToken,
				  email: identity.email
		  }}
      },
      extra: {profile: {name: identity.name}}
    };
  });

  var getAccessToken = function (query) {
	  var config = Accounts.loginServiceConfiguration.findOne({service: 'asana'});
	  if (!config)
		  throw new Accounts.ConfigError("Service not configured");
	  
	  var result = Meteor.http.post(
			  "https://app.asana.com/-/oauth_token", {headers: {Accept: 'application/json'}, params: {
				  code: query.code,
				  client_id: config.clientId,
				  client_secret: config.secret,
				  redirect_uri: Meteor.absoluteUrl("_oauth/asana?close"),
				  state: query.state
			  }});
	  if (result.error) // if the http response was an error
		  throw result.error;
	  if (result.data.error) // if the http response was a json object with an error attribute
	      throw result.data;
	  return result.data;
  };

  // var getIdentity = function (accessToken) {
  //   var result = Meteor.http.get(
  //     "https://api.github.com/user",
  //     {params: {access_token: accessToken}});

  //   if (result.error)
  //     throw result.error;
  //   return result.data;
  // };
}) ();