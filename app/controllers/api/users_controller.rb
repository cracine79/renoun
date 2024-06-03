class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + [:password, :firstName, :lastName]
  
  def create

    @user = User.new(user_params)
    

    if @user.save!
      @orders = {}
      @cart = {}
      @favorites = {}
      @buyer_seller_reviews = {}
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
      
  end


  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end


