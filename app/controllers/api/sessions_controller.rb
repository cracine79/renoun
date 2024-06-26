class Api::SessionsController < ApplicationController
  def show
    @user = current_user;

    if @user
      @cart = @user.carts
      @orders = @user.items_ordered
      @favorites = @user.favorites
      @buyer_seller_reviews = @user.reviews_of_sellers

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
      @orders = @user.items_ordered
      @cart = @user.carts
      @favorites = @user.favorites
      @buyer_seller_reviews = @user.reviews_of_sellers
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
