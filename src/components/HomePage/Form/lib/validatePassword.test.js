import validatePassword from './validatePassword'


describe('validatePassword()', () => {
  def('password', () => void 0)
  def('confirm', () => void 0)

  subject(() => validatePassword({
    password: $password,
    confirm: $confirm,
  }))

  context('when `password` is falsy', () => {
    def('password', () => '')

    context('when `confirm` is falsy', () => {
      def('confirm', () => '')

      it('returns the expected value', () => {
        expect($subject).toEqual({
          isValid: false,
          message: '',
        })
      })
    })

    context('when `confirm` is truthy', () => {
      def('confirm', () => 'foo')

      it('returns the expected value', () => {
        expect($subject).toEqual({
          isValid: false,
          message: '',
        })
      })
    })
  })

  context('when `password` is truthy', () => {
    def('password', () => 'asdofi')

    context('when `confirm` is falsy', () => {
      def('confirm', () => '')

      it('returns the expected value', () => {
        expect($subject).toEqual({
          isValid: false,
          message: '',
        })
      })
    })

    context('when `confirm` is equal to the password', () => {
      def('confirm', () => $password)

      it('returns the expected value', () => {
        expect($subject).toEqual({
          isValid: true,
          message: 'Passwords match',
        })
      })
    })

    context('when `confirm` is not equal to the password', () => {
      def('confirm', () => `${ $password } NOT THE SAME`)

      it('returns the expected value', () => {
        expect($subject).toEqual({
          isValid: false,
          message: 'Passwords do not match',
        })
      })
    })
  })
})
