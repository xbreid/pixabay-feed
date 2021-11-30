class User < ApplicationRecord
  has_secure_password
  PASSWORD_REQUIREMENTS = /\A
    (?=.{8,}) # At least 8 characters long
    (?=.*\d)  # Contains at least 1 digit
    (?=.*[a-z]) # Contains at least one lowercase letter
    (?=.*[[:^alnum:]]) # Contain at least one symbol
  /x

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, format: PASSWORD_REQUIREMENTS
end
