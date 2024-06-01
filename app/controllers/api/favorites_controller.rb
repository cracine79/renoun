class Api::FavoritesController < ApplicationController
wrap_parameters include: Favorite.attribute_names + [:favoriterId, :instrumentId]


    def create
  
        @favorite = Favorite.new(favorite_params)

            if @favorite.save!
      
                render 'api/favorites/show'
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