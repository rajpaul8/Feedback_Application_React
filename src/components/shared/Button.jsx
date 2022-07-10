import React from 'react'
import PropTypes from "prop-types";
function Button({ children, type, version, isDisabled}) {
  return (
      <button type={type} className={`btn btn-${version}`}>{ children }</button>
  )
}
Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false,
}
Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,

}
export default Button