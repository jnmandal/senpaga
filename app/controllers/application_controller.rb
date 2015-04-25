class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :require_login

  def current_user
    @_user || User.find(session[:user_id]) if session[:user_id]
  end

  def require_login
    redirect_to new_session_path, notice: 'You must be logged in to access this section.' unless current_user
  end
end
