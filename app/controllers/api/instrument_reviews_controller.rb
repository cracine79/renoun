class Api::InstrumentReviewsController < ApplicationController


def show
    @instrument = Instrument.find(params[:instrument_id])
    @instrument_name = @instrument.brand + " " + @instrument.model
    
    @reviews = InstrumentReview.where("instrument_name" == @instrument_name)
    render json: @reviews
    
end


end