define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');
  var fieldMOdel    = require('models/field');

  return {
      view: function(wrapper) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Wrapper: " + wrapper.name });
        wrapper.test( win.wrapper.find('.k-window-content') );
      }
  }
});