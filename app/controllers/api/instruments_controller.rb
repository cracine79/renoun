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
      

        render  'api/instruments/index'
    end

    def destroy
        @instrument = Instrument.find(params[:id]);
        id = @intstrument.id
        @instrument.destroy
        render json: { instrumentId: id}
    end

end