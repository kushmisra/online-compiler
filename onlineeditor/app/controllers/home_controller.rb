class HomeController < ApplicationController
	
	def main
		@result = '-'
	end

	def result
		
		file = File.open('main1.cpp', 'w')
		file.syswrite(params['code'])
		puts "","","","","",params['code'],"","",""
		stdout, stdeerr, status = Open3.capture3("g++ main1.cpp")
		
		if !stdeerr.empty?
			@result = stdeerr
		else
			stdout, stdeerr, status = Open3.capture3("./a.out > result.txt")
			@result = File.read('result.txt') 
		end

		
	end

end


