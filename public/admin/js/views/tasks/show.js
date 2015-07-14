define(function(require) {
  var kendo         = require('kendo');
  var windowHelper  = require('helpers/window');

  return {
      view: function(task) {
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Task: " + task.title });
      }
  }
});