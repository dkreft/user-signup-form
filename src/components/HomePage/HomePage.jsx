import { useCallback } from 'react'

import Form from './Form'

import Styles from './styles.module.sass'


export default function HomePage() {
  const handleSubmit = useCallback(({ username, password }) => {
    console.log('Submitted values: %o', {
      username,
      password,
    })
  }, [])

  return (
    <>
      <h1 className={ Styles.title }>
        User Sign-up Form
      </h1>

      <section>
        <h2 className={ Styles.sectionTitle }>
          Instructions
        </h2>

        <p>
          Create a user signup form prototype. Preference is for
          the code to be done using ReactJS, but you can also feel free
          to use vanilla JS. TST is currently utilizing reactjs v16.8 for
          development.
        </p>

        <p>
          <i>Note: Actual React version is { React.version }</i>
        </p>

        <h3 className={ Styles.sectionSubTitle }>
          Requirements
        </h3>

        <ol>
          <li>
            Create a form with 3 input fields:
            <ul>
              <li>username</li>
              <li>password</li>
              <li>confirm password</li>
            </ul>
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
      </section>

      <section>
        <h2 className={ Styles.sectionTitle }>
          Behold
        </h2>

        <div className={ Styles.formBlock }>
          <Form handleSubmit={ handleSubmit } />

          <div className={ Styles.note }>
            Note: Results are printed to the console
          </div>
        </div>
      </section>
    </>
  )
}
