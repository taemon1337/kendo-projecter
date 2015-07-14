class Ownable
    include Mongoid::Document

    field :groups, type: Array, default: []

    embedded_in :ownable, polymorphic: true
    
end