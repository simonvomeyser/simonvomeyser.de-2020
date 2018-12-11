import React, { Component } from 'react'

import Layout from '../components/layout'

export default class ProjectPage extends Component {
  render() {
    return (
      <Layout>
        <h1>{this.props.pageContext.name}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.pageContext.html}} />.
      </Layout>
    )
  }
}
