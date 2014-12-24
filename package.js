Package.describe({
  name: 'comerc:autoform-selectize',
  summary: 'Custom selectize input type for AutoForm',
  version: '1.0.0',
  git: 'https://github.com/comerc/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'themes/bootstrap3.html',
    'themes/bootstrap3.js',
  ], 'client');
});