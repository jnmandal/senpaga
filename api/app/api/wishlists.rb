class API < Grape::API
  resource :wishlists do
    get do
      Wishlist.all
    end

    post do
      w = Wishlist.new(url: params[:url])
      if w.save
        w
      else
        {error: 'error'}
      end
    end

    get ':id' do
      w = Wishlist.find(params[:id])
      if w
        w.books
      else
        {error: 'error'}
      end
    end

    get ':id/scrape' do
      w = Wishlist.find(params[:id])
      begin
        w.get_books
      rescue
        return {error: 'senpage could not process that wishlist'}
      end
      if w.save
        w.books
      else
        {error: 'error'}
      end
    end

  end
end
