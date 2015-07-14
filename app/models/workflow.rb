class Workflow
    include Mongoid::Document
    include Mongoid::Timestamps

    field :name, type: String
    field :description, type: String
    
    field :task_ids, type: Array, default: []
    
    embeds_one :ownership, as: :ownable
    
    validates :title, presence: true, uniqueness: true, allow_blank: false
#    validates :owner_id, presence: true, allow_blank: false
    
    def tasks
       Task.find(self.task_ids)
    end
    
    def tasknames
       self.tasks.map(&:name) 
    end

    def as_json(opts={})
        super({ :methods => [:tasknames] }.merge(opts))
    end
    
end