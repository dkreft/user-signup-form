/**
 * @typedef {Object} ValidationStatus
 * @property {Boolean} isValid
 * @property {String} message
 */

/**
 * @param {Object} args
 * @param {String} args.password
 * @param {String} args.confirm
 *
 * @returns {ValidationStatus}
 */
export default function validatePassword({ password, confirm }) {
  if ( !password || !confirm ) {
    return {
      isValid: false,
      message: '',
    }
  }

  if ( password !== confirm ) {
    return {
      isValid: false,
      message: 'Passwords do not match',
    }
  }

  return {
    isValid: true,
    message: 'Passwords match',
  }
}
