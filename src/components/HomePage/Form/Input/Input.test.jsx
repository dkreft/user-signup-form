import { mount } from 'enzyme'

import Input from './Input'

import Styles from './styles.module.sass'


describe('<Input />', () => {
  const ref = React.createRef()

  const name = 'oweretiu'
  const handleKeyUp = jest.fn()
  const otherProps = {
    type: 'password',
    foo: 'bar',
  }

  subject(() => mount(<Input
    name={ name }
    handleKeyUp={ handleKeyUp }
    ref={ ref }
    { ...otherProps }
  />).childAt(0))

  it('renders', () => {
    expect($subject).toExist()
  })

  it('is an <input/>', () => {
    expect($subject).toMatchSelector('input')
  })

  it('has the expected props', () => {
    expect($subject).toHaveProp({
      ...otherProps,
      className: Styles.root,
      onKeyUp: expect.any(Function),
    })
  })

  it('has the forwarded ref', () => {
    expect($subject.instance()).toEqual(ref.current)
  })

  describe('the `onKeyUp` prop', () => {
    const value = 'qowrutyasoikhgfg'

    def('e', () => ({
      stopPropagation: jest.fn(),
      target: {
        name,
        value
      },
    }))

    subject(() => $subject.prop('onKeyUp'))

    beforeEach(() => $subject($e))

    it('stops propagation', () => {
      expect($e.stopPropagation).toHaveBeenCalled()
    })

    it('invokes `handleKeyUp` with the correct args', () => {
      expect(handleKeyUp).toHaveBeenCalledWith({
        name,
        value,
      })
    })
  })
})
