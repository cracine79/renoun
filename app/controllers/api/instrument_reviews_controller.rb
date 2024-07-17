class Api::InstrumentReviewsController < ApplicationController

    wrap_parameters include: InstrumentReview.attribute_names + [:reviewerName, :instrumentName, :purchasedOnRenoun, :body, :stars, :title]

    def show
        @instrument = Instrument.find(params[:instrument_id])
        @instrument_name = @instrument.brand + " " + @instrument.model
        
        @reviews = InstrumentReview.where(["instrument_name = :instrument_name", { instrument_name: @instrument_name}])
        render json: @reviews
        
    end

    def create 
        @review = InstrumentReview.new(instrument_review_params)
        if @review.save!
            render json: @review
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    

    private
    def instrument_review_params
        params.require(:instrument_review).permit(:reviewer_name, :title, :body, :instrument_name, :stars, :purchased_on_renoun)
    end

end