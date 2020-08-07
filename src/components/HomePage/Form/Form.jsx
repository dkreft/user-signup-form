import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import PropTypes from 'prop-types'

import validatePassword from './lib/validatePassword'

import Button from './Button'
import Input from './Input'
import PasswordStatus from './PasswordStatus'

import Styles from './styles.module.sass'


export default function Form({ handleSubmit }) {
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

  const isSubmitEnabled = Boolean(isPasswordValid && formState.username)

  return (
    <div>
      <div>Username:</div>
      <div>
        <Input
          autoComplete="off"
          type="text"
          name="username"
          handleKeyUp={ handleKeyUp }
          defaultValue={ formState.username }
        />
      </div>

      <div>Password:</div>
      <div>
        <Input
          autoComplete="new-password"
          type="password"
          name="password"
          handleKeyUp={ handleKeyUp }
          defaultValue={ formState.password }
        />
      </div>

      <div>Confirm Password:</div>
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
