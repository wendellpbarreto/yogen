class YogenGenerator < Rails::Generators::Base
 	source_root File.expand_path('../templates', __FILE__)

	def copy_lib
		directory "lib"
	end

	def copy_app
    directory "app"
	end

end
