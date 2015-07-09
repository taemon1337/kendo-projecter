class Workflow
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :title, type: String
    field :description, type: String
    
    field :tasks, type: Array, default: []
    
    validates :title, presence: true, uniqueness: true, allow_blank: false
    
    def tasks
       Task.any_in(title: self.tasks) 
    end
    
end