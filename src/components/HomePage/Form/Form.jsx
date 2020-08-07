import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import PropTypes from 'prop-types'

import validatePassword from './lib/validatePassword'

import Button from './Button'
import Input from './Input'
import PasswordStatus from './PasswordStatus'

import Styles from './styles.module.sass'


export default function Form({ handleSubmit }) {
  const usernameInput = useRef(null)

  const [formState, setFormState] = useState({})
  const [passwordStatus, setPasswordStatus] = useState('')
  const [isPasswordValid, setPasswordValid] = useState(false)

  const handleButtonClick = useCallback(() => {
    const {
      password,
      username,
    } = formState

    handleSubmit({
      password,
      username,
    })
  }, [handleSubmit, formState])

  const handleKeyUp = useCallback(({ name, value }) => {
    setFormState((state) => ({
      ...state,
      [name]: value,
    }))
  }, [setFormState])

  useEffect(() => {
    const {
      confirm,
      password,
    } = formState

    const { isValid, message } = validatePassword({
      confirm,
      password,
    })

    setPasswordStatus(message)
    setPasswordValid(isValid)
  }, [formState, setPasswordValid, setPasswordStatus])

  useEffect(() => {
    usernameInput.current.focus()
  }, [])

  const isSubmitEnabled = Boolean(isPasswordValid && formState.username)

  return (
    <div className={ Styles.root }>
      <label>Username:</label>
      <div>
        <Input
          autoComplete="off"
          type="text"
          name="username"
          handleKeyUp={ handleKeyUp }
          defaultValue={ formState.username }
          ref={ usernameInput }
        />
      </div>

      <label>Password:</label>
      <div>
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          handleKeyUp={ handleKeyUp }
          defaultValue={ formState.password }
        />
      </div>

      <label>Confirm Password:</label>
      <div>
        <Input
          autoComplete="new-password"
          type="password"
          name="confirm"
          handleKeyUp={ handleKeyUp }
          defaultValue={ formState.confirm }
        />
        <PasswordStatus
          className={ Styles.status }
          isValid={ isPasswordValid }
          message={ passwordStatus }
        />
      </div>

      <div>
        <Button
          handleClick={ handleButtonClick }
          disabled={ !isSubmitEnabled }
        >
          Create account
        </Button>
      </div>
    </div>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
