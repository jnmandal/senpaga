class API < Grape::API
  resource :wishlists do
    get do
      Wishlist.all
    end

    post ':id/scrape' do
      wishlist.get_books
      if @wishlist.save
        @wishlist.books
      else
        {error: error}
      end
    end
  end
end
