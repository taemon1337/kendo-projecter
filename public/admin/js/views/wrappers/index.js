define(function(require) {
  var kendo         = require('kendo');
  var wrappers         = require('datasources/wrappers');
  var wrapperShow      = require('views/wrappers/show');

  var template = require('text!../../../templates/wrappers/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        wrappers: wrappers,
      
        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var wrapper = grid.dataItem( $(ee.currentTarget).parents('tr') );
            wrapperShow.view(wrapper);
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