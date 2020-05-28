class Api::WishlistsController < ApplicationController
    def index
        # byebug
        @wishlists = User.find(current_user.id).wishlists;
    end
    def create 
        new_wishlist = Wishlist.new(wishlist_params);
        new_wishlist.save
        @wishlists = User.find(current_user.id).wishlists;
        render :index
    end
    def destroy
        @wishlist = Wishlist.find(params[:id]);
        if @wishlist.destroy
            render json: {message: 'success'}
        else
            render json: @wishlist.erorrs.full_messages, status: 422
        end
    end
    private 
    def wishlist_params
        params.require(:wishlist).permit(:course_id, :student_id)
    end
end
