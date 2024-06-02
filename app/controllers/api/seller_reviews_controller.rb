class Api::SellerReviewsController < ApplicationController


def show

    @user = User.find(params[:id])
    @reviews = @user.reviews_from_buyers

    render 'api/seller_reviews/show'
end


end