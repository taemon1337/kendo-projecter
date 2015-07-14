requirejs.config({
  baseUrl: "admin/js",
  paths: {
      "jquery": "../../lib/jquery/1.11.2/jquery-1.11.2.min",
      "kendo": "../../lib/kendo/2014.1.318/kendo.all.min",
      "bootstrap": "../../lib/bootstrap/3.3.5/bootstrap.min",
      "text": "../../lib/text/2.0.12/text.min"
  },
  shim: {
    'kendo': {
      deps: ['jquery'],
      exports: 'kendo'
    },
    'jfb': {
      deps: ['kendo']
    }
  }
});

require([
  "bindings/all",
  "editors/all",
  "datasources/all",
  "helpers/all",
  "jfb/app"
], function(bindings, editors, datasources, helpers, jfb) {
  
  window.editors = editors;
  window.datasources = datasources;
  
  jfb.start();
});



