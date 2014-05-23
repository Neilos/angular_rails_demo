source 'https://rubygems.org'
source 'https://rails-assets.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.1.0'

# Use sqlite3 as the database for Active Record
gem 'sqlite3'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development 

gem 'angular_rails_csrf' # adds crsf protection on the server side for angular apps

# rails assets bundles bower javascript libraries as gems.
# Just prefix the bower packages name with 'rails-assets-'
# If the bower package is not registered with rails-assets... 
# ...add it here: https://rails-assets.org
gem 'rails-assets-angular-resource'
gem 'rails-assets-select2'
gem 'rails-assets-angular-ui-select2'
gem 'rails-assets-angular'

group :test, :development do
  gem 'debugger'
  gem "rspec-rails"
  gem 'rails-assets-angular-mocks'
  gem 'konacha'
  gem 'selenium-webdriver'
end
