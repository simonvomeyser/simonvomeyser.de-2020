import React from 'react'
import ConsoleJoke from '../components/ConsoleJoke'
import InitialPageFade from '../components/InitialPageFade';
import GlobalStyles from '../global-styles'
import Helmet from 'react-helmet';
import UnsupportedBrowserRedirect from '../components/UnsupportedBrowserRedirect';

export default ({ element }) => {
  return (
    <>
      <UnsupportedBrowserRedirect />
      <Helmet>
        <link rel="stylesheet" async href="https://use.typekit.net/rnq7erj.css" />
        <link rel="stylesheet" async type="text/css" href="/fonts.css" />
      </Helmet>
      <GlobalStyles />
      <ConsoleJoke />
      <InitialPageFade>
        {element}
      </InitialPageFade>
    </>
  )
}
