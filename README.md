# DogOfTheDay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Create web components
ng new dog-of-the-day --prefix ng-chile
ng add @angular/elements
ng generate component dog-of-the-day --inline-style --inline-template --view-encapsulation Emulated

## Run



## Build
ng build --prod --output-hashing=none --vendor-chunk=false 

Join all js files:
es5
cat dist/dog-of-the-day/{runtime-es5.js,polyfills-es5.js,main-es5.js} > dist/elements-es5.js
es6
cat dist/dog-of-the-day/{runtime-es2015.js,polyfills-es2015.js,main-es2015.js} > dist/elements-es2015.js

## Preview
npx http-server dist/dog-of-the-day/




## Example
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Dog of The Day</title>
  </head>
  <body>
    <ng-chile-dotd></ng-chile-dotd>
    <script src="elements-es2015.js" type="module"></script>
    <script src="elements-es5.js" nomodule defer></script>
  </body>
</html>