import { shallow } from 'enzyme'
import Head from 'next/head'

import App from './App'

import Styles from './styles.module.sass'


describe('<App />', () => {
  const Component = () => (
    <b>Hello, world</b>
  )
  const pageProps = {
    foo: 1,
  }

  subject(() => shallow(<App
    Component={ Component }
    pageProps={ pageProps }
  />))

  it('renders', () => {
    expect($subject).toExist()
  })

  it('has the right `className`', () => {
    expect($subject).toHaveClassName(Styles.root)
  })

  describe('the <Head>', () => {
    subject(() => $subject.find(Head))

    it('exists', () => {
      expect($subject).toExist()
    })

    it('has the correct content', () => {
      expect($subject).toContainReact(
        <title>TST Homework Assignment</title>
      )
    })
  })

  describe('the <main>', () => {
    subject(() => $subject.find('main'))

    it('exists', () => {
      expect($subject).toExist()
    })

    it('has the right `className`', () => {
      expect($subject).toHaveClassName(Styles.main)
    })

    it('contains the correct content', () => {
      expect($subject).toContainReact(
        <Component { ...pageProps } />
      )
    })
  })
})
