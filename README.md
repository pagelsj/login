# Login
## Brief
- Build a single page app with a sign-up form.
- The form should allow users to enter first name, last name, email, and password.
- All fields are required.
- Password validation:
  - Should be a minimum of eight characters,
  - Should contain lower and uppercase letters,
  - Should not contain user’s first or last name.
- Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.
- The form should send a POST request to https://demo-api.now.sh/users.
The request body example:
`{
  firstName: "Thomas",
  lastName: "Shelby",
  email: "thomas@shelby.co.uk"
}`

## Building
To build the project, clone the repo to your local machine and in the terminal run `npm install`.

## Running and testing the project
To run the project, simply run `ng serve` in the terminal.
Once this has completed, navigate to `http://localhost:4200` in your browser.

In order to run the unit tests, in the terminal run `ng test` or `ng test --code-coverage` to enable test coverage.

## Notes
### Routing
Due to the size of the project, I did not impliment any routing or page lazy-loading. That said, everything was constructed to very easily allow for lazy-loading to be added if aditional pages were to be added.

### Email validation
I know there are many ways to do the email address validation. Most of them return the same results as the one I used, the built in Angular Email Validator. I did not choose to use one of the 2000+ character Regular Expressions in this instance in order to keep the test code clean. If I went down the path of using a RegExp, I would have written a custom validator much the same way at the one created for the Password validating.


