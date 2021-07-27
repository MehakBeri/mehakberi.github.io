# Mehak Beri- Personal Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps for Deployment
- Download code repo. Run `npm ci` to get correct node_modules
- Run local server using `npm run start`. Make changes
- Push changes to master branch
- Do an `ng build` to see if there are any issues building the web application
- Test the local build from dist/mb folder using lite-server. Run `lite-server --baseDir=dist/mb`
- Once everything looks good, create a build to be stored in the docs folder: `ng build --prod=true --outputPath=docs`
- Since this project uses the Angular router, the routes configured on it will not be available from the server when requested directly on the browser address bar or when a page is refreshed. In those instances, user will get a 404 page which is not ideal. To remedy this: indicate to the server that if it gets a request for a page that it does not have, it should send the route to the index.html page. To do this:- copy the index.html file and rename the copy to 404.html. `cp docs/index.html docs/404.html`
- Add, commit and push changes to remote git repo. `git push origin master`
- Ensure that the Gihub repo's settings for pages has source set up as master/docs
- Source: https://blog.bitsrc.io/deploy-your-angular-project-to-github-pages-7cbacb96f35b 



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/mb` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To update
ng build --prod=true --outputPath=docs --base-href 'https://mehakberi.github.io/mb/' --source-map --build-optimizer
then git add, commit, push

### Bootstrap icons for angular:
https://avmaisak.github.io/ngx-bootstrap-icons/
