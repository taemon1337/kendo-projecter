class Group
    include Mongoid::Document
    include Mongoid::Timestamps
    
    field :name, type: String
    field :description, type: String
    field :users, type: Array, default: []
    
    validates :name, presence: true, uniqueness: true, length: { in: 5..20 }, format: { with: /^[a-zA-Z0-9 \-]+$/ }
    
    def users
        User.any_in(username: self.users) 
    end
    
end