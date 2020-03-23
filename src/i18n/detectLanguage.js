import { languages, defaultLanguage } from './index'
import browserLang from 'browser-lang'
import { isSSR } from '../util/isSSR';

export const detectLanguage = () => {

  const langKeys = languages.map(language => language.value)

  if (isSSR()) {
    return defaultLanguage
  } else {
    return window.localStorage.getItem('language') ||
      browserLang({
        languages: langKeys,
        fallback: defaultLanguage,
      })
  }
}