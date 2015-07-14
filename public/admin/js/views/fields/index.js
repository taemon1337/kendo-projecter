define(function(require) {
  var kendo         = require('kendo');
  var fields         = require('datasources/fields');
  var fieldShow      = require('views/fields/show');

  var template = require('text!../../../templates/fields/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        fields: fields,
      
        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var field = grid.dataItem( $(ee.currentTarget).parents('tr') );
            fieldShow.view(field);
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