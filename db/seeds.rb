10.times do
  User.create!(email: Faker::Internet.email, name: Faker::Name.name, password: "password", password_confirmation: "password")
end

users = User.all

5.times do
  Wishlist.create!(user: users.sample, name: Faker::Lorem.word)
end

wishlists = Wishlist.all

100.times do
  Book.create!(title: Faker::Lorem.words(3).join(" "), author: Faker::Name.name, asin: Faker::Number.number(13), price: Faker::Commerce.price, wishlist: wishlists.sample )
end

