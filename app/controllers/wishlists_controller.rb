class WishlistsController < ApplicationController
  before_action :set_wishlist, only: [:show, :edit, :update, :destroy, :scrape]

  def index
    @wishlists = Wishlist.all
  end

  def show
  end

  def new
    @wishlist = Wishlist.new
  end

  def edit
  end

  def create
    @wishlist = Wishlist.new(wishlist_params)
    if @wishlist.save
      redirect_to action: show, id: @wishlist.id
    else
      render :new
    end
  end

  def update
    @wishlist.update(wishlist_params)
  end

  # xhr only
  def scrape
    @wishlist.get_books
    if @wishlist.save
      wishlist.books.to_json
    else
      response
  end

  private
    def set_wishlist
      @wishlist = Wishlist.find(params[:id])
    end

    def wishlist_params
      params.require(:wishlist).permit(:url,:name, :user) #.merge({author: current_user})
    end
end
