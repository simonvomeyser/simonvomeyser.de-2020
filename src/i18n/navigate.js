import { withPrefix } from 'gatsby-link'
import browserLang from 'browser-lang'
import { languages } from './index'
import { navigate as gatsbyNavigate } from 'gatsby'

export const navigate = (location = '/', withLanguage = '') => {
  const langKeys = languages.map(language => language.value)

  const detected =
    withLanguage ||
    window.localStorage.getItem('language') ||
    browserLang({
      languages: langKeys,
      fallback: 'en',
    })

  const newUrl = withPrefix(`/${detected}${location}`)

  gatsbyNavigate(newUrl)
}
