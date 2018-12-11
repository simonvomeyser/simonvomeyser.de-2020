import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Simon vom Eyser.de</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/projects/">Show Projects</Link><br/>
    <Link to="/impressum/">Show Imprint</Link>
  </Layout>
)

export default IndexPage
