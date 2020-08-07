import { useCallback } from 'react'
import PropTypes from 'prop-types'

import Styles from './styles.module.sass'


export default function Button({ children, handleClick, ...props }) {
  const onClick = useCallback((e) => {
    e.stopPropagation()

    handleClick()
  }, [handleClick])

  return (
    <button
      { ...props }
      className={ Styles.root }
      onClick={ onClick }
    >
      { children }
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
}
