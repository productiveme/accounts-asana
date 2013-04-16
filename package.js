Package.describe({
  summary: "Login service for Asana accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth2-helper', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(
    ['asana_configure.html', 'asana_configure.js'],
    'client');
  
  api.add_files('asana_common.js', ['client', 'server']);
  api.add_files('asana_server.js', 'server');
  api.add_files('asana_client.js', 'client');
});
