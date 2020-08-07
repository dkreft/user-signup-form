import { shallow } from 'enzyme'

import PasswordStatus from './PasswordStatus'

import Styles from './styles.module.sass'


describe('<PasswordStatus />', () => {
  const message = 'asldiajsdhf'

  def('isValid', () => void 0)

  subject(() => shallow(<PasswordStatus
    isValid={ $isValid }
    message={ message }
  />))

  it('renders', () => {
    expect($subject).toExist()
  })

  it('has the supplied `message`', () => {
    expect($subject).toHaveText(message)
  })

  // N.B.: I normally don't bother to mock out `classnames` unless
  // I'm dealing with more complex logic or many more values.

  context('when `isValid` is undefined', () => {
    def('isValid', () => void 0)

    it('has the "error" `className`', () => {
      expect($subject).toHaveClassName(Styles.error)
    })
  })

  context('when `isValid` is false', () => {
    def('isValid', () => false)

    it('has the "error" `className`', () => {
      expect($subject).toHaveClassName(Styles.error)
    })
  })

  context('when `isValid` is true', () => {
    def('isValid', () => true)

    it('has the "okay" `className`', () => {
      expect($subject).toHaveClassName(Styles.okay)
    })
  })
})
