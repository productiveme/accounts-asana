Template.configureLoginServiceDialogForAsana.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForAsana.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client secret'}
  ];
};