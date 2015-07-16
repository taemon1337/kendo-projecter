define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');

  return {
      view: function(datasource) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Data Source: " + datasource.name });
      }
  }
});