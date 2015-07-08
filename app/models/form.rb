class Form
    include Mongoid::Document
    include Mongoid::Timestamps
    
    attr_protected :wrapper, :form_fields
    
    field :name, type: String
    field :description, type: String
    field :wrapper_id, type: String
    field :field_ids, type: Array, default: []

    def wrapper
        Wrapper.find(self.wrapper_id)
    end
    
    def form_fields
       Field.find(self.field_ids) 
    end
    
    def as_json(opts={})
        super({ :methods => [:wrapper,:form_fields] }.merge(opts))
    end

end