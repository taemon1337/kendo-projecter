class Project
    include Mongoid::Document
    include Mongoid::Timestamps

    field :name, type: String
    field :description, type: String
    
    field :workflow_id, type: String
    field :group_ids, type: Array, default: []  # the group(s) authorized to manage this project

    field :current_task_id, type: String

    embeds_one :ownership, as: :ownable

    validates :name, presence: true, length: { in: 5..50 }, format: { with: /[a-zA-Z0-9 \-]+/ }
    
#    embeds_one :history
#    embeds_one :calendar
#    embeds_many :reports
#    embeds_many :comments

    def workflow
        @workflow ||= Workflow.find(self.workflow_id)
    end
    
    def workflowname
        self.workflow.name 
    end
    
    def current_task_id
        tid = self.read_attribute(:current_task_id)
        return nil if self.workflow_id.nil? or self.workflow.task_ids.empty?
        return self.workflow.task_ids.first if tid.nil?
        return tid
    end
    
    def current_task
        @task ||= Task.find(self.current_task_id)
    end
    
    def current_taskname
        self.current_task.name rescue nil
    end

    def groups
        @group ||= Group.find(self.group_ids)
    end
    
    def groupnames
        self.groups.map(&:name) 
    end
    
    def as_json(opts={})
        super({ :methods => [:current_taskname,:workflowname,:groupnames] }.merge(opts))
    end

end