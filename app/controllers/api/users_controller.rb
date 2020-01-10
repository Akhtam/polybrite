class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        
        if User.exists?(email: user_params[:email])
            render json: ["That email is taken. Try another"], status: 401
        elsif @user.save
            login!(@user)
            render "api/users/show"
        
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private 
    def user_params
      params.require(:user).permit(:password, :first_name, :last_name, :email)
    end
end
