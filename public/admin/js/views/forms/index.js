define(function(require) {
  var kendo         = require('kendo');
  var forms         = require('datasources/forms');
  var formShow      = require('views/forms/show');

  var template = require('text!../../../templates/forms/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        forms: forms,
      
        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var form = grid.dataItem( $(ee.currentTarget).parents('tr') );
            formShow.view(form);
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