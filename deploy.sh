docker build -t muralPass-image .

docker tag muralPass-image registry.heroku.com/muralPass/web


docker push registry.heroku.com/muralPass/web

heroku container:release web -a muralPass