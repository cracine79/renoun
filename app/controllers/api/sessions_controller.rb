class Api::SessionsController < ApplicationController
  def show

    @user = current_user;
    @cart = @user.carts

    if @user
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
      id = @user.id
      @cart_items = Cart.where({buyer_id: id})
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
