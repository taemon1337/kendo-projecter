define(function(require) {
  var kendo                 = require('kendo');
  var windowHelper          = require('helpers/window');
  var formDatasource        = require('datasources/forms');
  var taskDatasource        = require('datasources/tasks');

  var template = require('text!../../../templates/workflows/show.html');

  return {
      view: function(workflow) {
        var forms = formDatasource();
        var tasks = taskDatasource();
        
        var el = $("<div></div>");  
        var win = windowHelper.open( el, { title: "Workflow: " + workflow.name });
        
        tasks.fetch(function() {
          workflow.tasks = workflow.task_ids.map(function(id) { return tasks.get(id) });

          var model = kendo.observable({
            workflow: workflow
          });

          var showView = new kendo.View( template, {
            model: model
          });
        
          showView.render( win.wrapper.find('.k-window-content'));
        });
        
        return null;
      }
  }
});