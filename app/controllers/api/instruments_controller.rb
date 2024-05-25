class Api::InstrumentsController < ApplicationController

    def show
        @instrument = Instrument.find(params[:id])
  
        if @instrument
            render 'api/instruments/show'
        else
            render json: { instrument: nil }
        end
    end

    def index
        @instruments = Instrument.all
        render json: @instruments
    end

    def destroy
        @instrument = Instrument.find(params[:id])
    
    end

end