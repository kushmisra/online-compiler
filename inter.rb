require 'sinatra'


get '/' do
	erb :eerrbb,locals:{ :result => '-'}

end

post '/result' do
	
	file = File.open('main.cpp', 'w')
	file.syswrite(params[:code])

	system 'g++ main.cpp'
	system './a.out > result.txt'

	sleep 2

	result = File.read('result.txt')

	erb :eerrbb, locals:{ :result => result }


end
