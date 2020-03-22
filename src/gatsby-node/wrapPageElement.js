import React from 'react'

export default ({ element, props }) => {
  const { hasTranslatedURL } = props.pageContext;

  if (hasTranslatedURL) {
    // set language
  } else {
    // detecth language
  }

  // Move layout here?
  return (
    <>
      {element}
    </>
  )
}
