define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');

  return {
      view: function(group) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Group: " + group.name });
      }
  }
});