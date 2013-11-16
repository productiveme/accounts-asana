Package.describe({
  summary: "Login service for Asana accounts"
});

Package.on_use(function(api) {
	api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('underscore', 'server');
  api.use('asana', ['client', 'server']);

  api.add_files('asana_login_button.css', 'client');
  
  api.add_files('asana_common.js', ['client', 'server']);
  api.add_files('asana_server.js', 'server');
  api.add_files('asana_client.js', 'client');
});
