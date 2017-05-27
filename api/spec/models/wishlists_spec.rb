describe Wishlist, type: :model do
  let!(:user) { User.create!(name: "jnmandal", email: "john@senpa.ga", password: "psswrd57", password_confirmation: "psswrd57") }
  let!(:wishlist) { Wishlist.create!(url: "http://amzn.com/w/Q2I3KCPZD9VE", user: user) }

  describe "model" do
    it "has a url" do
      expect(wishlist.url).to eq("http://amzn.com/w/Q2I3KCPZD9VE")
    end
    it "belongs to a user" do
      expect(wishlist.user).to eq(user)
    end
  end

  describe "validations" do
    it "should require presence of url" do
      w = Wishlist.new
      expect(w.save).to be(false)
    end

    it "should ensure basic url format" do
      w = Wishlist.new(url: "a")
      expect(w.save).to be(false)
    end

    it "should enforce uniqueness of url" do
      Wishlist.create!(url: "http://amzn.com/w/testurl")
      w = Wishlist.new(url: "http://amzn.com/w/testurl")
      expect(w.save).to be(false)
    end

    it "should prepend 'http://' when needed"  do
      w = Wishlist.create!(url: "amzn.com/w/2XPUQMFIXBR2A")
      expect(w.url).to eq("http://amzn.com/w/2XPUQMFIXBR2A")
    end
  end

  describe "scraping" do
    # test the scrape method here
  end
end