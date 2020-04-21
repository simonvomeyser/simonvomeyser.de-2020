import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import pageContext from '../gatsby-node/pageContext'
import CreateLanguageMetaTags from './CreateLanguageMetaTags';
import { injectIntl } from 'react-intl'

function CreateMetaTags({ intl }) {
  const { location } = useContext(pageContext);

  return (
    <>
      <Helmet
        title={intl.formatMessage({ id: 'defaultMetaTitle' })
        }
        meta={[
          {
            name: 'description',
            content: intl.formatMessage({ id: 'defaultMetaDescription' }),
          },
          {
            name: 'keywords',
            content: intl.formatMessage({ id: 'metaKeywords' }),
          },
          {
            name: 'og:image',
            content: location.origin + '/static/og-image.png'
          }
        ]}
      />
      <CreateLanguageMetaTags />
    </>
  )
}

export default injectIntl(CreateMetaTags)