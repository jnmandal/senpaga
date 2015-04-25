  class Wishlist < ActiveRecord::Base
  belongs_to :user
  has_many   :books

  # scraping methods
  #test: "http://amzn.com/w/2XPUQMFIXBR2A"
  def get_books
    unless self.scraped
      page = Nokogiri::HTML(open(self.url), nil, "iso-8859-1")
      item_elements = page.css(".g-span7when-wide")
      item_elements.each do |item|
        book_data = {}
        book_data[:title] = item.at_css(".a-link-normal").text.strip
        book_data[:author] = item.at_css(".a-size-small").text.split("by")[-1].strip
        book_data[:price] = item.at_css(".a-color-price").text.strip
        book_data[:price] = "N/A" unless book_data[:price].include?("$")
        book_data[:asin] = item.at_css(".a-link-normal")["href"].split("/")[2].strip.split("?")[0]
        self.books << Book.new(book_data)
      end
      self.last_scraped = Time.now
      self.scraped = true
    end
  end
end
