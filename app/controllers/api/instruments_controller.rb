class Api::InstrumentsController < ApplicationController

    def show
     
        @instrument = Instrument.find(params[:id])
  
        if @instrument 
            render json: @instrument
        else
            render json: { instrument: nil }
        end
    end



end