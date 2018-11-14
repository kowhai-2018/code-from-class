import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(res => res.body)
}

export function getWidget (id) {
  return request
    .get(`${widgetUrl}/${id}`)
    .then(res => res.body)
}

export function appendWidget (widget) {
  return request
    .post(widgetUrl)
    .send(widget)
    .then(res => res.body)
}

export function deleteWidget (id) {
  return request
    .delete(`${widgetUrl}/${id}`)
}

export function updateWidget (widget) {
  return request
    .put(`${widgetUrl}/${widget.id}`)
    .send(widget)
}
