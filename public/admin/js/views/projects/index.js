define(function(require) {
  var kendo           = require('kendo');
  var projects        = require('datasources/projects');
  var projectShow     = require('views/projects/show');

  var template = require('text!../../../templates/projects/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        projects: projects(),

        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var project = grid.dataItem( $(ee.currentTarget).parents('tr') );
            projectShow.view(project);
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