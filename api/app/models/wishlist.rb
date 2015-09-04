  class Wishlist < ActiveRecord::Base
  belongs_to :user
  has_many   :books
  validates :url, uniqueness: true, presence:true
  validate :is_valid_wishlist_url?
  before_validation :format_http

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

  private
  def is_valid_wishlist_url?
    unless url.nil? || url.include?("amzn") || url.include?("amazon")
      errors.add(:valid_wishlist_url, "must be amazon wishlist url")
    end
  end

  def format_http
    unless url.nil? || url[0...7] == "http://" || url[0...8] == "https://"
      url.insert(0, "http://")
    end
  end

end
