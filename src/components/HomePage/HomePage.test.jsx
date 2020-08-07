import { shallow } from 'enzyme'

import HomePage from './HomePage'
import Form from './Form'

import Styles from './styles.module.sass'


describe('<HomePage />', () => {
  subject(() => shallow(<HomePage />))

  it('renders', () => {
    expect($subject).toExist()
  })

  it('has the expected title markup', () => {
    expect($subject).toContainReact(
      <h1 className={ Styles.title }>
        User Sign-up Form
      </h1>
    )
  })

  describe('the <Form />', () => {
    subject(() => $subject.find(Form))

    it('exists', () => {
      expect($subject).toExist()
    })

    describe('the `handleSubmit` callback', () => {
      const username = 'aosdljkhf'
      const password = 'qowieurty'

      subject(() => $subject.prop('handleSubmit'))

      beforeEach(() => {
        jest.spyOn(window.console, 'log').mockImplementation()

        $subject({
          username,
          password,
        })
      })

      it('invokes `console.log` with the correct arguments', () => {
        expect(window.console.log).toHaveBeenCalledWith(
          expect.any(String),
          {
            username,
            password,
          }
        )
      })
    })
  })
})
