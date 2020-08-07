import { shallow } from 'enzyme'

import Button from './Button'

import Styles from './styles.module.sass'


describe('<Button />', () => {
  const handleClick = jest.fn()
  const otherProps = {
    foo: 1234,
    yealdf: 'aosdif',
  }
  const children = (
    <b>yo</b>
  )

  subject(() => shallow(
    <Button
      handleClick={ handleClick }
      { ...otherProps }
    >
      { children }
    </Button>
  ))

  it('renders', () => {
    expect($subject).toExist()
  })

  it('renders a <button>', () => {
    expect($subject).toMatchSelector('button')
  })

  it('has the expected props', () => {
    expect($subject).toHaveProp({
      ...otherProps,
      className: Styles.root,
      onClick: expect.any(Function),
    })
  })

  describe('the `onClick` prop', () => {
    def('e', () => ({
      stopPropagation: jest.fn(),
    }))

    subject(() => $subject.prop('onClick'))

    beforeEach(() => $subject($e))

    it('stops propagation', () => {
      expect($e.stopPropagation).toHaveBeenCalled()
    })

    it('invokes `handleClick`', () => {
      expect(handleClick).toHaveBeenCalled()
    })
  })
})
