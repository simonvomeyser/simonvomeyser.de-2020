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
        <link rel="stylesheet" async href="https://use.typekit.net/itg5rkc.css" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <ConsoleJoke />
      <InitialPageFade>
        {element}
      </InitialPageFade>
    </>
  )
}
