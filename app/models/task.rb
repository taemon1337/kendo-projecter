class Task
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :description, type: String
    field :group_ids, type: Array, default: []
    field :form_id, type: String
    
    field :required_field_ids, type: Array, default: []
    field :editable_field_ids, type: Array, default: []
    field :viewable_field_ids, type: Array, default: []

    embeds_one :ownership, as: :ownable
    
    validates :name, presence: true, uniqueness: true, allow_blank: false

    def groups
        @groups ||= Group.find(self.group_ids)
    end
    
    def groupnames
        self.groups.map(&:name) 
    end
    
    def users
        self.groups.map(&:users).flatten
    end
    
    def usernames
        self.groups.map(&:usernames).flatten
    end
    
    def as_json(opts={})
        super({ :methods => [:usernames,:groupnames] }.merge(opts))
    end

end