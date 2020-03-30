import React from 'react'
import ConsoleJoke from '../components/ConsoleJoke'
import InitialPageFade from '../components/InitialPageFade';
import GlobalStyles from '../global-styles'
import Helmet from 'react-helmet';

export default ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/rnq7erj.css" />
        <link rel="stylesheet" type="text/css" href="/fonts.css" />
      </Helmet>
      <GlobalStyles />
      <ConsoleJoke />
      <InitialPageFade>
        {element}
      </InitialPageFade>
    </>
  )
}
