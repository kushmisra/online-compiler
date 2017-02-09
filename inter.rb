require 'sinatra'
require 'open3'
require 'tilt/erubis'

get '/' do
	erb :eerrbb,locals:{ :result => '-'}
end

post '/result' do
	file = File.open('main.cpp', 'w')
	file.syswrite(params[:code])
    
		system 'g++ main.cpp'
		system './a.out > result.txt'
		m=File.read('result.txt')
		if m.empty?
			stdout, stdeerr, status = Open3.capture3("g++ main.cpp")
			erb :eerrbb, locals:{ :result => stdeerr }
		else

			erb :eerrbb, locals:{ :result => m }
		
		end
	
	
end
