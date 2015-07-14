define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');

  return {
      view: function(user) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "User: " + user.username });
      }
  }
});