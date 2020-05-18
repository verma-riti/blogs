This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Project details
Home page: A simple table to display users, with columns as name, company, blog posts.
Using the /users api fill up the name and company name of each user along with a link to the
Posts page of that particular user.

Posts page: This page url will take a parameterised userId and will display the list of posts (use
the post title) of that particular user. Each of these will have a link to the Post Details Page. Use
pagination with skip, limit params in the api.

Post Details Page: Use url parameters to get the post id and fetch the details accordingly with
respective api. Display both title and body. There will also be a link Comments. Clicking on the
comments link will fetch the comments and show them on this page itself. Also there will be a
delete button on this page which will delete the post calling the respective api. After a successful
response from delete api, it will redirect to the Posts page of respective user again.
