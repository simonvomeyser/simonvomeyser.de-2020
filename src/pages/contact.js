import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageLayout>
          <ChangeTitle additionalText="navigationContact" />
          <h1>Contact</h1>
          <p>Write me something :)</p>
          <TestContainer>
            <TestElement>Element</TestElement>
          </TestContainer>
        </PageLayout>
      </Layout>
    )
  }
}

const TestContainer = styled.div`
  position: relative;
  border: 1px solid red;
  padding: 15px;
  min-height: 400px;
`
const TestElement = styled.div`
  width: 50px;
  height: 50px;
  background: goldenrod;
  position: absolute;
  top: 10%;
  left: 10%;
`

export default withIntl(ContactPage)
