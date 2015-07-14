define(function(require) {
  var kendo           = require('kendo');
  var tasks           = require('datasources/tasks');
  var taskShow        = require('views/tasks/show');

  var template = require('text!../../../templates/tasks/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        tasks: tasks(),
      
        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var task = grid.dataItem( $(ee.currentTarget).parents('tr') );
            taskShow.view(task);
          });
          
        }
        
      });

      var indexView = new kendo.View( template, {
        model: model,
      });

      return indexView;      
    }
  }
});