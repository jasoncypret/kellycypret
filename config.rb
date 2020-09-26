set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :fonts_dir,  'fonts'
set :relative_links, true


activate :livereload
activate :directory_indexes
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end
# activate :blog do |blog|
#   blog.layout = "post"
#   blog.permalink = "{title}.html"
# end


# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


# Methods defined in the helpers block are available in templates
helpers do
  def image_tag( path, params = {} )
   classes = params[:class].try(:split, " ") || []
   classes << "lazyload"
   params[:class] = classes.try(:join, " ")
   super( path, params )
 end
end

# Build-specific configuration
configure :build do
  activate :minify_css
  # activate :minify_javascript # Minify Javascript on build
  activate :asset_hash # Enable cache buster
  activate :relative_assets # Use relative URLs
  # set :http_prefix, "/Content/images/"# Or use a different image path
end