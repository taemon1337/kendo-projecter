class User
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :username, type: String
    field :groups, type: Array, default: []
    
    validates :username, presence: true, uniqueness: true, length: { in: 5..20 }, format: { with: /^[a-zA-Z0-9\-]+$/ }
    
    def groups
        Group.any_in(username: self.groups) 
    end
    
end