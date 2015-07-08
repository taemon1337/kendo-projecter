class Wrapper
   include Mongoid::Document
   include Mongoid::Timestamps
   
   field :name, type: String
   field :description, type: String
   
   field :form_wrapper, type: String
   field :field_wrapper, type: String
   
   field :form_selector, type: String
   field :field_selector, type: String
   field :title_selector, type: String
   
end