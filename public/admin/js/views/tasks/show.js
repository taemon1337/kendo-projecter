define(function(require) {
  var kendo                 = require('kendo');
  var windowHelper          = require('helpers/window');
  var formDatasource        = require('datasources/forms');
  var datasourceDatasource  = require('datasources/datasources');

  return {
      view: function(task) {
        var forms = formDatasource();
        var datasources = datasourceDatasource();
        
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Task: " + task.name });
        
        forms.fetch(function() {
          var form = this.get(task.form_id);
          
          form.build( win.wrapper.find('.k-window-content') );
        });
      }
  }
});