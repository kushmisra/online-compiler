class HomeController < ApplicationController

	@result = nil;
	def main
		@result = "sdaasd";
	end

	def result
		file = File.open('main1.cpp', 'w')
		file.syswrite(params['code'])
		file1 = File.open('input.txt','w')
		file1.syswrite(params['code1'])
		puts "","","","","",params['code'],"","",""
		stdout, stdeerr, status = Open3.capture3("g++ main1.cpp -o main")
		stdout, stdeerr, status = Open3.capture3("./main < input.txt")
		if !stdeerr.empty?
			@result = stdeerr
		else
			stdout, stdeerr, status = Open3.capture3("./a.out > result.txt")
			@result = File.read('result.txt')
		end
		puts "","","",@result,"","","";
		redirect_to '/';
	end

end


