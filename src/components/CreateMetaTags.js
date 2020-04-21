import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import CreateLanguageMetaTags from './CreateLanguageMetaTags';

function CreateMetaTags({ intl }) {
  const title = intl.formatMessage({ id: 'defaultMetaTitle' });
  const description = intl.formatMessage({ id: 'defaultMetaDescription' });
  const ogImage = 'https://simonvomeyser.de/og-image.png';

  return (
    <>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: description
          },
          {
            name: 'keywords',
            content: intl.formatMessage({ id: 'metaKeywords' }),
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: title
          },
          {
            name: 'og:description',
            content: description
          },
          {
            name: 'og:image',
            content: ogImage
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            name: 'twitter:image',
            content: ogImage
          },
        ]}
      />
      <CreateLanguageMetaTags />
    </>
  )
}

export default injectIntl(CreateMetaTags)