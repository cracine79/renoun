class Api::FavoritesController < ApplicationController



    def create
        debugger;
        @favorite = Favorite.new(favorite_params)
            if @favorite.save!
                render json: @favorite
            else
                render json: ('already favorited')
            end
    end

    def destroy
        @favorite = Favorite.find(params[:id])

        if @favorite.destroy
            render json: @favorite.id
        else
            render render json: {errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end


    private

    def favorite_params
        params.require(:favorite).permit(:favoriter_id, :instrument_id)
    end

end