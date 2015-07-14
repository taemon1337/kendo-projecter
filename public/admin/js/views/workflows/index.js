define(function(require) {
  var kendo           = require('kendo');
  var workflows       = require('datasources/workflows');
  var workflowShow    = require('views/workflows/show');

  var template = require('text!../../../templates/workflows/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        workflows: workflows(),
      
        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var workflow = grid.dataItem( $(ee.currentTarget).parents('tr') );
            workflowShow.view(workflow);
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