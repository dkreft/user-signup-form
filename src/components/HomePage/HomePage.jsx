import { useCallback } from 'react'

import Form from './Form'

import Styles from './styles.module.sass'


export default function HomePage() {
  const handleSubmit = useCallback(({ username, password }) => {
    console.log('Submitted values: %o, %o', username, password)
  }, [])

  return (
    <>
      <h1 className={ Styles.title }>
        Exercise
      </h1>

      <p>
        Please create a user signup form prototype. Preference is for
        the code to be done using Reactjs, but you can also feel free
        to use vanillajs. TST is currently utilizing reactjs v16.8 for
        development.
      </p>

      <h2>Requirements</h2>

      <ol>
        <li>
          Create a form with 3 input fields, for the username,
          password, and confirm password, respectively.
        </li>
        <li>
          Persist the state of the input fields entries.
        </li>
        <li>
          The password and confirm password input field should validate
          their entries by comparing both values.
        </li>
        <li>

          Output to the user when both fields match or do not match
        </li>
        <li>
          Bonus: style the form
        </li>
      </ol>

      <h2>Behold</h2>
      
      <Form handleSubmit={ handleSubmit } />
    </>
  )
}
