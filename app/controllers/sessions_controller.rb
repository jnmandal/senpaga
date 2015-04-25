class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_name(params[:user][:name]).try(:authenticate, params[:user][:password])
    if @user
      puts "success"
      session[:user_id] = @user.id
      redirect_to "/"
    else
      puts "fail"
      @user = User.new
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root
  end
end