Accounts.oauth.registerService('asana');

Accounts.addAutopublishFields({
  forLoggedInUser: _.map(Asana.whitelistedFields, 
    function(subfield) {
      return 'services.asana.' + subfield; 
    }),
  forOtherUsers: _.map(['name'], 
    function(subfield) {
      return 'services.asana.' + subfield;
    })
});