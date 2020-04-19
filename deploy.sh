docker build -t muralpass-image .

docker tag muralpass-image registry.heroku.com/muralpass/web


docker push registry.heroku.com/muralpass/web

heroku container:release web -a muralpass