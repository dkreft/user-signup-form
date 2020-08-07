import {
  forwardRef,
  useCallback,
} from 'react'

import PropTypes from 'prop-types'

import Styles from './styles.module.sass'


function Input({ name, handleKeyUp, ...props }, ref) {
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
      ref={ ref }
    />
  )
}

export default forwardRef(Input)

Input.propTypes = {
  handleKeyUp: PropTypes.func.isRequired,

  name: PropTypes.string,
}
