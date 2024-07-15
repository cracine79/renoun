class Api::InstrumentReviewsController < ApplicationController


def show
    @instrument = Instrument.find(params[:instrument_id])
    render json: @instrument
end


end