class CurrentUserController < ApplicationController

  # Returns a 401 if the user is not signed in. Returns a 200 if they are.
  
  before_action :authenticate_user!
  def index
    render json: UserSerializer.new(current_user).serializable_hash[:data][:attributes], status: :ok
  end
end
