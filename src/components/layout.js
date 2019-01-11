import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Language from '../components/language';
import { injectIntl } from 'react-intl'
import Container from '../styled-components/container';
import styled from 'styled-components';

import './layout.css'
import { Link } from '@reach/router';

const Layout = ({ children, data, intl }) => (
  <div>
    <Helmet
      title={intl.formatMessage({ id: 'title' })}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'description' }) },
        {
          name: 'keywords',
          content: intl.formatMessage({ id: 'keywords' })
        }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <PageWrapper>
      <Container >
        <h1>
          test
          <Link to="/">{intl.formatMessage({id: 'landingTitle1'})}</Link> 
        </h1>
        <h2>
          {intl.formatMessage({id: 'landingTitle2'})}
        </h2>
        <Language/>
        <br/>
        <br/>
        {children}
      </Container>
    </PageWrapper>
  </div>
)

const PageWrapper = styled.div`
  margin-top: 30px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);
