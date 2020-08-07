# user-signup-form

This is a technical interview homework problem given by TST.

## Assignment

Create a user signup form prototype. Preference is for the code to be done using ReactJS, but you can also feel free to use vanilla JS. TST is currently utilizing reactjs v16.8 for development.

### Requirements

1. Create a form with 3 input fields:
    * username
    * password
    * confirm password
2. Persist the state of the input fields entries.
3. The password and confirm password input field should validate their entries by comparing both values.
4. Output to the user when both fields match or do not match
5. **Bonus:** style the form

## Installation

    $ git clone <repo url>
    $ npm install

## Usage

### Start a development server

    $ npm run dev

### Watch unit tests

    $ npm run test

### Code coverage

    $ npm run test:coverage

### Linting

    $ npm run lint

    $ npm run lint:fix

### Build

    $ npm run build

## Technologies &amp; Tools Used

* ES6+
* NextJS (React)
* `eslint`
* `jest`
* `enzyme`
* `sass`
* CSS modules - every component that needs styling has its own `styles.module.sass` file living right next to the owning component. This makes CSS maintenance and management trivial.

## About the Directory Structure

This application is structured using a modular hierarchy, which focuses on where components are used, rather than on the type of files they are. This makes it trivially easy to determine the scope of use of any given file.

Please read https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1 for more information on how this works.

## Author

Dan Kreft &lt;dan@kreft.net&gt;
