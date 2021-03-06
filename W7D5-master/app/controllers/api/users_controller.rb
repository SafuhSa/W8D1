class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_param)
    if @user.save
      login(@user)
      # render json: "you've logged in!!"
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_param
    params.require(:user).permit(:username, :password)
  end


end
