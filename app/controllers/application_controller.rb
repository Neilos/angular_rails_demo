class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # According to Angular's documentation, when performing XHR requests, Angula's $http service reads a token from a cookie (by default, XSRF-TOKEN) and sets it as an HTTP header (X-XSRF-TOKEN). Since only JavaScript that runs on our domain could read the cookie, our server can be assured that the XHR came from JavaScript running on our domain. Angular will not set the header for cross-domain requests.
  # To make this work our server needs to set a token in a JavaScript readable session cookie called XSRF-TOKEN
  def set_csrf_token_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

protected

  # We overwrite Rails's verified_request? method to check the X-XSRF-TOKEN set by angular (in addition to to the normal CSRF checks - hence the call to super)
  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end

end
