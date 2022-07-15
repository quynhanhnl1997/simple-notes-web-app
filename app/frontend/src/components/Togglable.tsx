import React, { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'

interface TogglableButton extends React.ComponentPropsWithoutRef<'button'> {
  buttonLabel?: string;
}

export type TogglableHandle = {
  toggleVisibility: () => void;
}

const Togglable = forwardRef<TogglableHandle, TogglableButton>((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable