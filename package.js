Package.describe({
  name: 'productiveme:accounts-asana',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Asana OAuth2 login service for use with Meteor Auth, requires asana package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/productiveme/accounts-asana.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('productiveme:asana@1.0.1', ['client', 'server']);
	api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('underscore', 'server');

  api.addFiles('asana_login_button.css', 'client');

  api.addFiles('asana_common.js', ['client', 'server']);
  api.addFiles('asana_server.js', 'server');
  api.addFiles('asana_client.js', 'client');
});
