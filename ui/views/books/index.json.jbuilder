json.array!(@books) do |book|
  json.extract! book, :id, :asin, :title, :author, :price
  json.url book_url(book, format: :json)
end
