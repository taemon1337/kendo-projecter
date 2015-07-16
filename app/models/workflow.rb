class Workflow
    include Mongoid::Document
    include Mongoid::Timestamps

    field :name, type: String
    field :description, type: String
    
    field :task_ids, type: Array, default: []
    field :form_id, type: String
    
    embeds_one :ownership, as: :ownable
    
    validates :name, presence: true, uniqueness: true, allow_blank: false, length: { in: 5..50 }, format: { with: /[a-zA-Z0-9 \-]+/ }
#    validates :owner_id, presence: true, allow_blank: false
    
    def tasks
       Task.find(self.task_ids)
    end
    
    def tasknames
       self.tasks.map(&:name) 
    end
    
    def form
        Form.find(self.form_id) rescue nil
    end
    
    def formname
        self.form.name rescue ''
    end

    def as_json(opts={})
        super({ :methods => [:tasknames,:formname] }.merge(opts))
    end
    
end