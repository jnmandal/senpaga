describe User do
  let!(:user) { User.create!(name: "jnmandal", email: "john@senpa.ga", password: "psswrd57", password_confirmation: "psswrd57") }

  describe "model" do
    it "has a name" do
      expect(user.name).to eq("jnmandal")
    end
    it "has an email" do
      expect(user.email).to eq("john@senpa.ga")
    end
    it "has a password" do
      expect(user.try(:authenticate, "psswrd57")).to be
    end
  end

  describe "validations" do
    it "should ensure name is present" do
      u = User.new(email: "john@senpa.ga", password: "psswrd57", password_confirmation: "psswrd57")
      expect(u.save).to be(false)
    end
    it "should enforce uniqueness of usernames" do
      User.create!(name:"thomaspearce", password: "psswrd57", password_confirmation: "psswrd57")
      u = User.new(name:"thomaspearce", password: "psswrd57", password_confirmation: "psswrd57")
      expect(u.save).to be(false)
    end
    it "should ensure email is real if given" do
      u = User.new(name: "invalid_email_user", email: "invalid_email", password: "psswrd57", password_confirmation: "psswrd57")
      expect(u.save).to be(false)
    end
    it "should make sure password is 7 chars" do
      u = User.new(name: "nudosphere", email: "chris@senpa.ga", password: "nudo", password_confirmation: "nudo")
      expect(u.save).to be(false)
    end
  end
end