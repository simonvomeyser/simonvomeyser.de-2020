import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageLayout>
          <ChangeTitle additionalText="navigationContact" />
          <h1>Contact</h1>
          <p>Write me something :)</p>
        </PageLayout>
      </Layout>
    )
  }
}

export default withIntl(ContactPage)
