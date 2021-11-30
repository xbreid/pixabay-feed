class Serializer
  def self.build(*args, &block)
    Jbuilder.new(*args, &block).attributes!
  end
end