define(function(require) {
    return {
        text:           require("editors/text"),
        textarea:       require("editors/textarea"),
        json:           require("editors/json"),
        preview:        require("editors/preview"),
        fields:         require("editors/fields"),
        wrapper:        require("editors/wrapper"),
        tasks:          require("editors/tasks"),
        groups:         require("editors/groups"),
        users:          require("editors/users")
    }
});