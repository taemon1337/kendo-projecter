class Form
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :description, type: String
    field :wrapper_id, type: String
    field :field_ids, type: Array, default: []

    def wrapper
        @wrapper ||= Wrapper.find(self.wrapper_id) rescue nil
    end
    
    def wrappername
        self.wrapper.name rescue ''
    end
    
    # use form_fields since just fields is used by Rails
    def form_fields
        @form_fields ||= Field.find(self.field_ids || [])
    end
    
    def fieldnames
        self.form_fields.map(&:name)
    end
    
    def as_json(opts={})
        super({ :methods => [:wrappername,:fieldnames] }.merge(opts))
    end

end