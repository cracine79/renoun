class Api::SessionsController < ApplicationController
  def show

    @user = current_user;


    if @user
      @cart = @user.carts
      render 'api/users/show'
    else

      render json: { user: nil }
      
    end
  end

  def create
    email = params[:email]
    password = params[:password]

    
    @user = User.find_by_credentials(email, password)


    if @user
      @cart = @user.carts
      id = @user.id
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end
