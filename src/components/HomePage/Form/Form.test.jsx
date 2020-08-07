import { mount } from 'enzyme'

import Button from './Button'
import Form from './Form'
import Input from './Input'
import PasswordStatus from './PasswordStatus'
import validatePassword from './lib/validatePassword'

import Styles from './styles.module.sass'


jest.mock('./lib/validatePassword')


describe('<Form />', () => {
  const handleSubmit = jest.fn()
  const message = 'afqwofuljsdhf'

  def('isValid', () => void 0)

  def('component', () => mount(<Form
    handleSubmit={ handleSubmit }
  />))

  beforeEach(() => {
    validatePassword.mockImplementation(() => ({
      isValid: $isValid,
      message,
    }))
  })

  it('renders', () => {
    expect($component).toExist()
  })

  describe('the username input', () => {
    const name = 'username'

    subject(() => $component.find({ name }))

    it('exists', () => {
      expect($subject).toExist()
    })

    it('is an <Input />', () => {
      expect($subject).toMatchSelector(Input)
    })

    it('has the expected props', () => {
      expect($subject).toHaveProp({
        autoComplete: 'off',
        defaultValue: void 0,
        handleKeyUp: expect.any(Function),
        name,
        type: 'text',
      })
    })

    describe('the `handleKeyUp` prop', () => {
      const value = 'alsdiasfoir4rfhfgaksfgjh'

      subject(() => $subject.invoke('handleKeyUp'))

      beforeEach(() => $subject({
        name,
        value,
      }))

      it('sets the `defaultValue` to the new value', () => {
        expect($component.find({ name })).toHaveProp({
          defaultValue: value,
        })
      })
    })
  })

  describe('the password input', () => {
    const name = 'password'

    subject(() => $component.find({ name }))

    it('exists', () => {
      expect($subject).toExist()
    })

    it('is an <Input />', () => {
      expect($subject).toMatchSelector(Input)
    })

    it('has the expected props', () => {
      expect($subject).toHaveProp({
        autoComplete: 'new-password',
        defaultValue: void 0,
        handleKeyUp: expect.any(Function),
        name,
        type: 'password',
      })
    })

    describe('the `handleKeyUp` prop', () => {
      const value = 'the new passw0rd'

      subject(() => $subject.invoke('handleKeyUp'))

      beforeEach(() => $subject({
        name,
        value,
      }))

      it('sets the `defaultValue` to the new value', () => {
        expect($component.find({ name })).toHaveProp({
          defaultValue: value,
        })
      })

      it('invokes `validatePassword` with the new password', () => {
        expect(validatePassword).toHaveBeenCalledWith({
          password: value,
          confirm: void 0,
        })
      })
    })
  })

  describe('the confirm input', () => {
    const name = 'confirm'

    subject(() => $component.find({ name }))

    it('exists', () => {
      expect($subject).toExist()
    })

    it('is an <Input />', () => {
      expect($subject).toMatchSelector(Input)
    })

    it('has the expected props', () => {
      expect($subject).toHaveProp({
        autoComplete: 'new-password',
        defaultValue: void 0,
        handleKeyUp: expect.any(Function),
        name,
        type: 'password',
      })
    })

    describe('the `handleKeyUp` prop', () => {
      const value = 'the new passw0rd'

      subject(() => $subject.invoke('handleKeyUp'))

      beforeEach(() => $subject({
        name,
        value,
      }))

      it('sets the `defaultValue` to the new value', () => {
        expect($component.find({ name })).toHaveProp({
          defaultValue: value,
        })
      })

      it('invokes `validatePassword` with the new password', () => {
        expect(validatePassword).toHaveBeenCalledWith({
          confirm: value,
          password: void 0,
        })
      })
    })
  })

  describe('the submit button', () => {
    subject(() => $component.find(Button))

    it('exists', () => {
      expect($subject).toExist()
    })

    describe('the `disabled` prop', () => {
      def('username', () => void 0)

      subject(() => $subject.prop('disabled'))

      beforeEach(() => {
        $component.find({ name: 'username'}).invoke('handleKeyUp')({
          name: 'username',
          value: $username,
        })
      })

      context('when the password is valid', () => {
        def('isValid', () => true)

        context('when the username is falsy', () => {
          def('username', () => '')

          it('is false', () => {
            expect($subject).toBe(true)
          })
        })

        context('when the username is truthy', () => {
          def('username', () => 'aosdif')

          it('is true', () => {
            expect($subject).toBe(false)
          })
        })
      })

      context('when the password is invalid', () => {
        def('isValid', () => false)

        context('when the username is falsy', () => {
          def('username', () => '')

          it('is false', () => {
            expect($subject).toBe(true)
          })
        })

        context('when the username is truthy', () => {
          def('username', () => 'aosdif')

          it('is false', () => {
            expect($subject).toBe(true)
          })
        })
      })
    })

    describe('the `handleClick` prop', () => {
      const password = 'qwoeirasudlrjf'
      const username = 'aosdlfkajsfduhqw'

      subject(() => $subject.prop('handleClick'))

      beforeEach(() => {
        $component.find({ name: 'username'}).invoke('handleKeyUp')({
          name: 'username',
          value: username,
        })
        $component.find({ name: 'password'}).invoke('handleKeyUp')({
          name: 'password',
          value: password,
        })

        $subject()
      })

      it('invokes `handleSubmit` with the correct values', () => {
        expect(handleSubmit).toHaveBeenCalledWith({
          password,
          username,
        })
      })
    })
  })
})
