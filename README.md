Adicione a app no Github
heroku create namastreta --buildpack https://github.com/mars/create-react-app-buildpack.git
heroku git:remote -a namastreta -> namastreta é o nome do repositorio novo no heroku