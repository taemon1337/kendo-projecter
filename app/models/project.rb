class Project
    include Mongoid::Document
    include Mongoid::Timestamps

    field :name, type: String
    field :description, type: String
    
    field :workflow_id, type: String
    field :group_ids, type: Array, default: []  # the group(s) authorized to manage this project

    embeds_one :ownership, as: :ownable

    validates :name, presence: true, length: { in: 5..50 }, format: { with: /[a-zA-Z0-9 \-]+/ }
    
#    embeds_one :history
#    embeds_one :calendar
#    embeds_many :reports
#    embeds_many :comments

    def workflow
        Workflow.find(self.workflow_id)
    end
    
    def workflowname
        self.workflow.name 
    end

    def groups
        Group.find(self.group_ids)
    end
    
    def groupnames
        self.groups.map(&:name) 
    end
    
    def as_json(opts={})
        super({ :methods => [:workflowname,:groupnames] }.merge(opts))
    end

end