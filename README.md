# Fizz Buzz App Set Up

# Pre requisites 
Node JS 

1. Open Project folder where package.json exists and run below command
# npm install
2. Once dependencies are installed, run below command to start app on localhost
# npm run start
3. To run test cases of the project, run below command and then press a.
# npm run test

# Project Structure
    - There a 4 components in total
        - Header: To display header of the application
        - InputForm: For TextBox and Buttons and calling Fizz Buzz Component
                     on submit of values.
        - FizzBuzz: Displays a table of values based on input received.
                    FizzBuzz logic is in here.
        - ErrorBoundary: Any error apart from event handlers in application falls back to this component.
    - App.js - Root file which imports all components.
    - App.test.js - Test cases to check if buttons are disabled on page load and    validate components.

# Project Features
    - Submit and Clear buttons are only enabled when there is value in text box.
    - values entered are seperated by comma and FizzBuzz is calculated on that.
    - Empty Items are returned as Invalid Items.
    - Table has Output displayed for each input and has scrolling enabled.
    - Any special chars are also considered invalid.
    



