define([
    "jquery",
    "kendo",
    "jfb/router",
    "jfb/layout", 
    "views/forms/index",
    "views/fields/index",
    "views/wrappers/index",
    "views/workflows/index",
    "views/tasks/index",
    "views/users/index",
    "views/groups/index"
], function($,kendo, router, layout, formIndexView, fieldIndexView, wrapperIndexView, workflowIndexView, taskIndexView, userIndexView, groupIndexView) {

    var start = function() {
        layout.showIn("#forms-wrapper", formIndexView.view());
        layout.showIn("#fields-wrapper", fieldIndexView.view());
        layout.showIn("#wrappers-wrapper", wrapperIndexView.view());
        layout.showIn("#workflows-wrapper", workflowIndexView.view());
        layout.showIn("#tasks-wrapper", taskIndexView.view());
        layout.showIn("#users-wrapper", userIndexView.view());
        layout.showIn("#groups-wrapper", groupIndexView.view());
        
        layout.render("#application");
    };
    
    return {
        start: start
    };
});






