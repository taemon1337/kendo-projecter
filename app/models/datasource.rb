class Datasource
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :host, type: String
    field :basepath, type: String, default: '/'
    field :basename, type: String, default: -> { name.pluralize }
    
    field :read_options, type: Hash, default: {}
    field :create_options, type: Hash, default: {}
    field :update_options, type: Hash, default: {}
    field :destroy_options, type: Hash, default: {}
    
    def kendo_options
        return {
            schema: {
                data: self.basename,
                total: "total",
                model: {
                    id: "_id"
                }
            },
            transport: {
                read: self.read_options,
                create: self.create_options,
                update: self.update_options,
                destroy: self.destroy_options,
                parameterMap: self.parameterMap_function
            },
            error: self.error_function,
            requestEnd: self.requestEnd_function
        }
    end
    
    def url
        File.join(self.host.to_s,self.basepath,self.basename).gsub('//','/')
    end

    def read_options
       self.default_read_options.merge(self.read_attribute(:read_options))
    end
    
    def create_options
       self.default_create_options.merge(self.read_attribute(:create_options))
    end
    
    def update_options
       self.default_update_options.merge(self.read_attribute(:update_options))
    end
    
    def destroy_options
       self.default_destroy_options.merge(self.read_attribute(:destroy_options))
    end

    def default_read_options
        {
            url: self.url,
            method: "GET",
            dataType: "json",
            contentType: "application/json"
        }
    end
    
    def default_create_options
        {
            url: self.url,
            method: "POST",
            dataType: "json",
            contentType: "application/json"
        }
    end
    
    def default_update_options
        {
            url: self.access_function,
            method: "PUT",
            dataType: "json",
            contentType: "application/json"
        }
    end
    
    def default_destroy_options
        {
            url: self.access_function,
            method: "DELETE",
            dataType: "json",
            contentType: "application/json"
        }
    end
    
    def access_function
        "function(data) { return \"#{self.url}/data._id\" }"
    end
    
    def parameterMap_function
       "function(type, data) { 
           if(type === 'create' || type === 'update') {
               return JSON.stringify({ #{self.basename.singularize}: data })
           }
       }"
    end

    def error_function
        "function(resp) {
            console.log('Error with #{self.basename}:', resp);
        }"
    end

    def requestEnd_function
        "function(resp) {
            console.log('Request End for #{self.basename}', resp);
        }"
    end

    def as_json(opts={})
        super({ :methods => [:kendo_options] }.merge(opts))
    end

end