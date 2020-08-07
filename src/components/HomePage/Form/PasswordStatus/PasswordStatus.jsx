import PropTypes from 'prop-types'
import classnames from 'classnames'

import Styles from './styles.module.sass'


export default function PasswordStatus({ className, isValid, message }) {
  const _className = classnames(className, {
    [Styles.okay]: isValid,
    [Styles.error]: !isValid,
  })

  return (
    <div className={ _className }>
      { message }
    </div>
  )
}

PasswordStatus.propTypes = {
  className: PropTypes.string,
  isValid: PropTypes.bool,
  message: PropTypes.node,
}
