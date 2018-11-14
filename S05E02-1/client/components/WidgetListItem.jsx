import React from 'react'

export default function WidgetListItem ({ editWidget, showDetails, widget }) {
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' onClick={() => showDetails(widget)}>details</a>
      <a href='#' onClick={() => editWidget(widget.id)} style={{ marginLeft: 5 }}>edit</a>
    </div>
  )
}
