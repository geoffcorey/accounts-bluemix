Package.describe({
  name: 'kizimo:accounts-bluemix',
  summary: "Login service for Bluemix accounts",
  version: "1.0.0",
  git: 'https://github.com/kizimo/accounts-bluemix.git'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.0.0', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.0.0', ['client', 'server']);
  api.use('kizimo:bluemix@1.0.0', ['client', 'server']);

  api.addFiles('bluemix_login_button.css', 'client');
  api.addFiles("bluemix.js");
});
