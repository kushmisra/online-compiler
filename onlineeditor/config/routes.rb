Rails.application.routes.draw do
 root 'home#main'
 post '/result' => 'home#result'
end
