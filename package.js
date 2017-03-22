Package.describe({
  name: 'szchenghuang:facts-page',
  version: '0.0.1',
  summary: 'Hook a page to a specified path.',
  git: 'git@github.com:szchenghuang/facts-page.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('ecmascript');
  api.use('facts');
  api.use('webapp');
  api.export('FactsPage');
  api.mainModule('index.js', 'server');
});
