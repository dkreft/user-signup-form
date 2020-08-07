import { useCallback } from 'react'
import PropTypes from 'prop-types'

import Styles from './styles.module.sass'


export default function Input({ name, handleKeyUp, ...props }) {
  const onKeyUp = useCallback((e) => {
    e.stopPropagation()

    const { value } = e.target

    handleKeyUp({
      name,
      value,
    })
  }, [handleKeyUp, name])

  // This, of course, means that we cannot pass in a `className` prop,
  // but that's easy enough to remedy (using the `classnames` npm
  // package) when the need arises.
  return (
    <input
      { ...props }
      className={ Styles.root }
      onKeyUp={ onKeyUp }
    />
  )
}

Input.propTypes = {
  handleKeyUp: PropTypes.func.isRequired,

  name: PropTypes.string,
}
