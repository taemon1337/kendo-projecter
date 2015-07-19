class Datasource
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :host, type: String
    field :basepath, type: String, default: '/'
    field :basename, type: String, default: -> { name.pluralize }
    
    field :schema, type: Hash, default: -> { { data: name.pluralize, total: "total", id: '_id' } }
    
    field :dataType, type: String, default: 'json'
    field :contentType, type: String, default: 'application/json'
    
    
    field :read_url, type: String, default: -> { name.pluralize }
    field :create_url, type: String, default: -> { File.join(basepath,name.pluralize) }
    field :update_url, type: String, default: -> { File.join(basepath,name.pluralize,_id) }
    field :destroy_url, type: String, default: -> { File.join(basepath,name.pluralize,_id) }
    
    field :read_method, type: String, default: :GET
    field :create_method, type: String, default: :POST
    field :update_method, type: String, default: :PUT
    field :destroy_method, type: String, default: :DELETE
    
    field :parameterMap, type: String, default: -> { default_parameterMap_function }
    field :error_function, type: String, default: -> { default_error_function }
    field :requestEnd, type: String, default: -> { default_requestEnd_function }
    
    def default_parameterMap_function
       "function(type, data) { 
           if(type === 'create' || type === 'update') {
               return JSON.stringify({ #{self.basename.singularize}: data })
           }
       }"
    end

    def default_error_function
        "function(resp) {
            console.log('Error with #{self.basename}:', resp);
        }"
    end

    def default_requestEnd_function
        "function(resp) {
            console.log('Request End for #{self.basename}', resp);
        }"
    end

    def as_json(opts={})
        super({ :methods => [] }.merge(opts))
    end

    def self.permitted_attributes
        [
            :name,
            :host,
            :basename,
            :basepath,
            :schema,
            :dataType,
            :contentType,
            :read_url,
            :create_url,
            :update_url,
            :destroy_url,
            :read_method,
            :create_method,
            :update_method,
            :destroy_method,
            :parameterMap,
            :error_function,
            :requestEnd
        ]
    end

end