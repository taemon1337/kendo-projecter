class Field
   include Mongoid::Document
   include Mongoid::Timestamps
   
   field :name, type: String
   field :title, type: String
   field :description, type: String
   
   field :element, type: String
   field :element_attributes, type: String, default: '{ "placeholder": "..." }'
   field :kendo_role, type: String, default: ''
   field :kendo_opts, type: String, default: '{}'
   
   validates :name, presence: true, length: { in: 2..30 }, format: { with: /[_a-z]+/ }
   validates :title, presence: true, length: { in: 2..30 }, format: { with: /[a-zA-Z ]+/ }
end