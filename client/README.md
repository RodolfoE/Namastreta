### first configs ###
Adicione a app no Github
heroku create namastreta --buildpack https://github.com/mars/create-react-app-buildpack.git
heroku git:remote -a namastreta -> namastreta é o nome do repositorio novo no heroku

1. Use the Windows WSL, and the nodejs version described in the package.json
2. Update your git repository (no yarn.lockfile, pls)
3. Then push to the heroku repository: git push heroku master
    * login to Heroku, if not done yet
4. Add the autentication with Google on firebase