Template.configureLoginServicesDialogForAsana.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServicesDialogForAsana.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client secret'}
  ];
};