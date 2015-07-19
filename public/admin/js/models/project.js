define(function(require) {
    var kendo           = require('kendo');
    var taskDatasource      = require('datasources/tasks');
    var workflowDatasource  = require('datasources/workflows');
    var formDatasource      = require('datasources/forms');
    var fieldDatasource     = require('datasources/fields');
    
    return kendo.data.Model.define({
        id: "_id",
        
        fields: {
            _id: { type: "string", nullable: false, editable: false },
            name: { type: "string", editable: true },
            description: { type: "string", editable: true },
            workflow_id: { type: "string", editable: true, nullabel: false },
            current_task_id: { type: "string", editable: true, nullabel: false },
            group_ids: { defaultValue: [], editable: true, nullable: false },
            
            current_taskname: { 
                type: "string", 
                editable: false,
                template: function(current_taskname) {
                    return current_taskname;
                }
            },
            
            workflowname: { 
                type: "string", 
                editable: false,
                template: function(workflowname) {
                    return workflowname;
                }
            },
            
            groupnames: { 
                defaultValue: [],
                editable: false,
                template: function(groupnames) {
                    return groupnames.join();
                }
            }
        },
        
        build: function(el) {
            var project = this;
            var tasks       = taskDatasource();
            var workflows   = workflowDatasource();
            var forms       = formDatasource();
            var fields      = fieldDatasource();
            
            tasks.fetch(function() {
                project.current_task = tasks.get(project.current_task_id);
        
                workflows.fetch(function() {
                    project.workflow = workflows.get(project.workflow_id);
                    
                    forms.fetch(function() {
                        project.workflow.form = forms.get(project.workflow.form_id);
                        project.workflow.form.build(el);
                        
                        fields.fetch(function() {
                            project.workflow.form.form_fields = project.workflow.form.field_ids.map(function(id) { return fields.get(id); });
                            
                            project.workflow.form.form_fields.forEach(function(f) {
                                var remove_field = true;
                                if(project.current_task.required_field_ids.indexOf(f.id) >= 0) {
                                    project.workflow.form.require_field(f, el);
                                    remove_field = false;
                                }
                                if(project.current_task.editable_field_ids.indexOf(f.id) >= 0) {
                                    remove_field = false;
                                }
                                if(project.current_task.viewable_field_ids.indexOf(f.id) >= 0) {
                                    project.workflow.form.disable_field(f, el);
                                }
                                if(remove_field) {
                                    project.workflow.form.remove_field(f, el);
                                }
                            });
                        });
                    });
                });
            });
        }
        
    });
});