import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import validatePassword from './lib/validatePassword'

import Styles from './styles.module.sass'


export default function Form({ handleSubmit }) {
  const [formState, setFormState] = useState({})
  const [passwordStatus, setPasswordStatus] = useState('')
  const [isPasswordValid, setPasswordValid] = useState(false)
  
  const onButtonClick = useCallback((e) => {
    e.stopPropagation()

    handleSubmit(formState)
  }, [handleSubmit, formState])

  const onInputChange = useCallback((e) => {
    e.stopPropagation()

    const { name, value } = e.target

    setFormState((state) => ({
      ...state,
      [name]: value,
    }))
  }, [setFormState])

  useEffect(() => {
    const { password, confirm } = formState

    const { isValid, message } = validatePassword(formState)

    setPasswordStatus(message)
    setPasswordValid(isValid)
  }, [formState.password, formState.confirm, setPasswordValid, setPasswordStatus])

  const isSubmitEnabled = isPasswordValid && formState.username

  return (
    <div>
      <div>Username:</div>
      <div>
        <input
          autoComplete="off"
          type="text"
          name="username"
          onChange={ onInputChange }
          defaultValue={ formState.username }
        />
      </div>

      <div>Password:</div>
      <div>
        <input
          autoComplete="new-password"
          type="password"
          name="password"
          onKeyUp={ onInputChange }
          defaultValue={ formState.password }
        />
      </div>

      <div>Confirm Password:</div>
      <div>
        <input
          autoComplete="new-password"
          type="password"
          name="confirm"
          onKeyUp={ onInputChange }
          defaultValue={ formState.confirm }
        />
        <PasswordStatus
          isValid={ isPasswordValid }
          message={ passwordStatus }
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={ onButtonClick }
          disabled={ !isSubmitEnabled }
        >
          Create account
        </button>
      </div>
    </div>
  )
}

function PasswordStatus({ isValid, message }) {
  const className = ( isValid ) ? Styles.okay : Styles.error

  return (
    <div className={ className }>
      { message }
    </div>
  )
}
