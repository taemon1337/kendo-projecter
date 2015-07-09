class Task
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :title, type: String
    field :description, type: String
    field :editors, type: String
    
    validates :title, presence: true, uniqueness: true, allow_blank: false
    
end