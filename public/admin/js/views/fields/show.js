define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');

  return {
      view: function(field) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Field: " + field.name });
        field.build( win.wrapper.find('.k-window-content'));
      }
  }
});