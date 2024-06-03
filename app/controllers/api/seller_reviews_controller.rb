class Api::SellerReviewsController < ApplicationController

wrap_parameters include: SellerReview.attribute_names + [:reviewerId, :sellerId, :firstName, :lastInit, :body, :stars, :title]
def show

    @user = User.find(params[:id])
    @reviews = @user.reviews_from_buyers


    render 'api/seller_reviews/show'
end

def create

    debugger
    @review =SellerReview.new(seller_review_params)
    debugger
    if @review.save!
        debugger
        render 'api/seller_reviews/show'
    else
        debugger;
        render json: {errors: @reviews.errors.full_messages}, status: :unprocessable_entity
    end
end

def update
    @review = SellerReview.find(params[:id])
    debugger
    @review.update(seller_review_params)
    render 'api/seller_reviews/show'
     end

end


private

def seller_review_params
    params.require(:seller_review).permit(:reviewer_id, :seller_id, :title, :body, :stars, :first_name, :last_init)
end

