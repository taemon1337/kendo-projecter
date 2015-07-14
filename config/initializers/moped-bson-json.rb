#
# Monkey Patch Mongoid to return _id without the $oid
#

# mongoid 3.x
#module Moped
#  module BSON
#    class ObjectId
#      alias :to_json :to_s
#      alias :as_json :to_s
#    end
#  end
#end


# mongoid 4.x
module BSON
  class ObjectId
    alias :to_json :to_s
    alias :as_json :to_s
  end
end