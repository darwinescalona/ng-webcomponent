# DogOfTheDay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Create web components
ng new dog-of-the-day --prefix ng-chile
ng add @angular/elements
ng generate component dog-of-the-day --inline-style --inline-template --view-encapsulation Native


## Build
ng build --prod --output-hashing=none && cat dist/dog-of-the-day/{runtime-*,polyfills-*,main-*}.js > elements.js 

## View in page
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Dog of The Day - Angular Chile</title>
  </head>
  <body>
    <ng-chile-dotd></ng-chile-dotd>
    <script src="dog-of-the-day/elements.js"></script>
  </body>
</html>