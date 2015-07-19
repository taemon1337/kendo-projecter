class User
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :group_ids, type: Array, default: []
    
    validates :name, presence: true, uniqueness: true, length: { in: 5..20 }, format: { with: /[a-zA-Z0-9]+/ }
    
    def groups
        @groups ||= Group.find(self.group_ids || [])
    end
    
    def groupnames
        self.groups.map(&:name) 
    end
    
    def has_role?(role)
        self.roles.include?(role)
    end
    
    def as_json(opts={})
        super({ :methods => [:groupnames] }.merge(opts))
    end
    
end