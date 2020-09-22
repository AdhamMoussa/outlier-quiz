import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const Button = ({ className, ...props }) => {
  return (
    <button className={classnames(styles.button, className)} {...props} />
  )
}

Button.propTypes = {
  className: PropTypes.string
}

export default Button
