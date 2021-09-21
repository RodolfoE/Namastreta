heroko apps -> show the apps you have on heroku
heroku git:remote -a namastreta =>
    set git remote heroku to https://github.com/RodolfoE/Namastreta.git
heroku buildpacks -> shows the buildpacks currently on
heroku buildpacks:remove {name grapped on previous command}   | heroku buildpacks:remove https://github.com/mars/create-react-app-buildpack.git
* delete the yarn.lockfile
* git push heroku master