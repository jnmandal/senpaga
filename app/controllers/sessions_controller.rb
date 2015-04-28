class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_name(params[:user][:name]).try(:authenticate, params[:user][:password])
    if @user
      session[:user_id] = @user.id
      redirect_to :root
    else
      flash[:notice] = 'Incorrect username or password.'
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root, notice: 'Logged out.'
  end
end