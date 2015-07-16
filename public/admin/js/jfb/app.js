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
    "views/groups/index",
    "views/projects/index",
    "views/datasources/index"
], function($,kendo, router, layout, formIndexView, fieldIndexView, wrapperIndexView, workflowIndexView, taskIndexView, userIndexView, groupIndexView, projectIndexView, datasourceIndexView) {

    var start = function() {
        layout.showIn("#forms-wrapper", formIndexView.view());
        layout.showIn("#fields-wrapper", fieldIndexView.view());
        layout.showIn("#wrappers-wrapper", wrapperIndexView.view());
        layout.showIn("#workflows-wrapper", workflowIndexView.view());
        layout.showIn("#tasks-wrapper", taskIndexView.view());
        layout.showIn("#projects-wrapper", projectIndexView.view());
        layout.showIn("#users-wrapper", userIndexView.view());
        layout.showIn("#groups-wrapper", groupIndexView.view());
        layout.showIn("#datasources-wrapper", datasourceIndexView.view());
        
        layout.render("#application");
    };
    
    return {
        start: start
    };
});






