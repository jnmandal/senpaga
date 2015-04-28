class User < ActiveRecord::Base
  has_many :wishlists
  has_many :books, through: :wishlists
  validates :name, uniqueness: true, presence:true
  validates :password, length: {minimum: 7}
  validate :email_has_at_sign?

  has_secure_password

  private
  def email_has_at_sign?
    unless email.nil? || email.include?("@")
      errors.add(:valid_email, "must contain an @")
    end
  end
end
