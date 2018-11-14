import React from 'react'

import AddWidget from './AddWidget'
import EditWidget from './EditWidget'
import ErrorMessage from './ErrorMessage'
import WidgetDetails from './WidgetDetails'
import WidgetList from './WidgetList'

import * as api from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeWidget: null,
      addWidgetVisible: false,
      detailsVisible: false,
      editWidget: null,
      error: null,
      widgets: []
    }

    this.deleteWidget = this.deleteWidget.bind(this)
    this.editWidget = this.editWidget.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
    this.refreshList = this.refreshList.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
    this.showDetails = this.showDetails.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  refreshList () {
    api.getWidgets()
      .then(widgets => {
        this.setState({
          error: null,
          addWidgetVisible: false,
          detailsVisible: false,
          editWidget: null,
          widgets
        })
      })
      .catch(error => this.setState({ error }))
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true,
      detailsVisible: false
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  deleteWidget (id) {
    api.deleteWidget(id)
      .then(this.refreshList)
      .catch(error => this.setState({ error }))
  }

  editWidget (id) {
    this.setState({
      editWidget: id
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>

        <WidgetList
          editWidget={this.editWidget}
          showDetails={this.showDetails}
          widgets={this.state.widgets} />

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add widget</a>
        </p>

        {this.state.addWidgetVisible && <AddWidget
          refresh={this.refreshList} />}

        {this.state.editWidget && <EditWidget
          refresh={this.refreshList}
          widgetId={this.state.editWidget} />}

        {this.state.detailsVisible && <WidgetDetails
          deleteWidget={this.deleteWidget}
          hideDetails={this.hideDetails}
          isVisible={this.state.detailsVisible}
          widget={this.state.activeWidget} />}
      </div>
    )
  }
}
