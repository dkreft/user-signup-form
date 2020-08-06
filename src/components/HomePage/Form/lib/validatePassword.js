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
