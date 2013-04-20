(function() {
  Accounts.oauth.registerService('asana', 2, function(query) {

    var response = getTokens(query);
    var accessToken = response.accessToken;
    var identity = response.identity;

    var serviceData = {
      accessToken: accessToken,
      expiresAt: (+new Date) + (1000 * response.expiresIn),
      id: response.identity.id
    };

    // only set the token in serviceData if it's there. this ensures
    // that we don't lose old ones (since we only get this on the first
    // log in attempt)
    if (response.refreshToken)
      serviceData.refreshToken = response.refreshToken;

    return {
      serviceData: serviceData,
      options: {profile: {name: identity.name}}
    };
  });

  // returns an object containing:
  // - accessToken
  // - expiresIn: lifetime of token in seconds
  // - refreshToken, if this is the first authorization request
  var getTokens = function (query) {
    var config = Accounts.loginServiceConfiguration.findOne({service: 'asana'});
    if (!config)
      throw new Accounts.ConfigError("Service not configured");

    var result = Meteor.http.post(
      "https://app.asana.com/-/oauth_token", {params: {
        code: query.code,
        client_id: config.clientId,
        client_secret: config.secret,
        redirect_uri: Meteor.absoluteUrl("_oauth/asana?close"),
        grant_type: 'authorization_code'
      }});

    if (result.error) // if the http response was an error
      throw result.error;
    if (result.data.error) // if the http response was a json object with an error attribute
      throw result.data;

    return {
      accessToken: result.data.access_token,
      refreshToken: result.data.refresh_token,
      expiresIn: result.data.expires_in,
      identity: result.data.data
    };
  };
})();
