class Group
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :description, type: String
    field :user_ids, type: Array, default: []
    
    validates :name, presence: true, uniqueness: true, length: { in: 5..20 }, format: { with: /[a-zA-Z0-9 \-]+/ }
    
    def users
        User.find(self.user_ids || [])
    end
    
    def usernames
        self.users.map(&:name) 
    end
    
    def as_json(opts={})
        super({ :methods => [:usernames] }.merge(opts))
    end
    
end