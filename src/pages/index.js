import React from 'react'
import { withIntl, Link } from '../i18n'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>Hello</h2>
    <p>Now go build something great.</p>
    <Link to="/projects/">Show Projects</Link><br/>
    <Link to="/imprint/">Show Imprint</Link>
  </Layout>
)

export default withIntl(IndexPage);
