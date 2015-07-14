define(function(require) {
    return {
        fields:     require('datasources/fields'),
        forms:      require('datasources/forms'),
        wrappers:   require('datasources/wrappers'),
        workflows:  require('datasources/workflows'),
        tasks:      require('datasources/tasks'),
        users:      require('datasources/users'),
        groups:     require('datasources/groups')
    }
});
