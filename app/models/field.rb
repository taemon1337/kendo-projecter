class Field
   include Mongoid::Document
   include Mongoid::Timestamps
   
   field :field, type: String
   field :title, type: String
   field :description, type: String
   
   field :element, type: String
   field :element_attributes, type: Hash, default: {}
   field :kendo_role, type: String
   field :kendo_opts, type: String
   
end