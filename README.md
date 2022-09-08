# Shopify integration

## Basic setup

1. rename .env.example to .env at backend folder

2. update your .env with database and shopfiy information.

for shopfiy must set:

SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=

you can get more from https://github.com/osiset/laravel-shopify

## Developing env

see https://github.com/osiset/laravel-shopify/wiki/Developing-Locally

please use "Valet Method"

## Update nginx conf

go to "/Users/train/.config/valet/Nginx" (train should be your usename). will find a config file named backend.test

insert:

```
location / {
	proxy_pass http://127.0.0.1:5173;
}
location ~* ^(/install|/authenticate|/api) {
    proxy_set_header Host $host;
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    #proxy_set_header Host $host:$server_port;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Port $server_port;    
    proxy_pass http://127.0.0.1:8000;
}
```

and comment:

location / {
    rewrite ^ "/Users/train/.composer/vendor/laravel/valet/server.php" last;
}

## Start your local service

go to backend folder:

php artisan serve

go to frontend folder:

yarn dev

## Setup Shopify App on https://partners.shopify.com/

go to App setup->URLs, fill urls.

App URL:

https://backend.test/

Allowed redirection URL(s):

https://backend.test/authenticate
https://backend.test/accessToken
