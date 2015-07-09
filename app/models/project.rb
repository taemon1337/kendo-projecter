class Project
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :title, type: String
    field :description, type: String
    
    field :workflows, type: Array, default: []
    field :owners, type: Array, default: []
    
    validates :title, presence: true, length: { in: 5..20 }, format: { with: /^[a-zA-Z0-9 \-]+$/ }
    
#    embeds_one :history
#    embeds_one :calendar
#    embeds_many :reports
#    embeds_many :comments

    def workflows
        Workflow.any_in(title: self.workflows)
    end

    def owners
       Group.any_in(name: self.owners) 
    end

end