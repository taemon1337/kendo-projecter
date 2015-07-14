define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');

  return {
      view: function(form) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Form: " + form.name });
        form.build( win.wrapper.find('.k-window-content'));
      }
  }
});