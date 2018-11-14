import React from 'react'

export default function WidgetDetails (props) {
  const { deleteWidget, hideDetails, isVisible, widget } = props
  const classes = 'widget-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {widget.name}</p>
      <p>Price: {widget.price}</p>
      <p>Mfg: {widget.mfg}</p>
      <p>In stock: {widget.inStock}</p>
      <a href='#' onClick={hideDetails}>Close</a>
      <a href='#' onClick={() => deleteWidget(widget.id)}>Delete</a>
    </div>
  )
}
