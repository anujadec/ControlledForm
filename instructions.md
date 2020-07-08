# Instructions

Create a form with the following fields: first name, last name, email address and phone number.
The fields should have their state controlled by their parent component.
Add a submit button and alert the form values when submit is clicked.

Look at the [final result](https://r4r8rqpw24.codesandbox.io/) for visual requirements.

## Requirements

The form should:

- look like the final result
- control the values of all 4 inputs
- on submit alert the field values as a string of key: value pairs

## Approach

- Use a single state object in the parent component to handle all field values
- Use the event object from the change handlers on the inputs to know which field to update in state
- Intercept the form submit behavior to alert the field values
- Use a template literal to alert the values as a string

### FYI

You will need to prevent the default action of the form to log out the field values.
If you don't, the page will refresh itself when you click submit.
This is handled the same as in normal DOM listeners: `event.preventDefault()`
