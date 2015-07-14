class Project
    include Mongoid::Document
    include Mongoid::Timestamps

    field :name, type: String
    field :description, type: String
    
    field :workflow_ids, type: Array, default: []
    field :group_ids, type: Array, default: []

    embeds_one :ownership, as: :ownable

    validates :name, presence: true, length: { in: 5..20 }, format: { with: /^[a-zA-Z0-9 \-]+$/ }
    
#    embeds_one :history
#    embeds_one :calendar
#    embeds_many :reports
#    embeds_many :comments

    def workflows
        Workflow.find(self.workflow_ids)
    end
    
    def workflownames
        self.workflows.map(&:name) 
    end

    def groups
        Group.find(self.group_ids)
    end
    
    def groupnames
        self.groups.map(&:name) 
    end
    
    def as_json(opts={})
        super({ :methods => [:workflownames,:groupnames] }.merge(opts))
    end

end