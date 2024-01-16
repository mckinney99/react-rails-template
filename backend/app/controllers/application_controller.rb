class ApplicationController < ActionController::API
  def current_user
    puts "X" * 100
    puts session[:user_id]
    puts "X" * 100
    if session[:user_id]
      @current_user ||= User.find(session[:user_id]) 
    else
      nil
    end
  end
end
