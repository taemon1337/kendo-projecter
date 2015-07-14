define(function(require) {
  var kendo           = require('kendo');
  var groups          = require('datasources/groups');
  var groupShow       = require('views/groups/show');

  var template = require('text!../../../templates/groups/index.html');

  return {
    view: function() {
      
      var model = kendo.observable({
        groups: groups(),

        dataBound: function(e) {
          var grid = e.sender;
          
          grid.tbody.find('.k-grid-show').on('click',function(ee) {
            var group = grid.dataItem( $(ee.currentTarget).parents('tr') );
            groupShow.view(group);
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