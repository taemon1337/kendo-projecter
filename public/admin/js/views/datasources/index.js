define(function(require) {
  var kendo           = require('kendo');
  var datasources     = require('datasources/datasources');
  var datasourceShow  = require('views/datasources/show');

  var template = require('text!../../../templates/datasources/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        datasources: datasources(),

        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var datasource = grid.dataItem( $(ee.currentTarget).parents('tr') );
            datasourceShow.view(datasource);
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