import React, { useContext } from 'react'
import { GermanySvg, UnitedStatesSvg } from 'src/svg'
import languageContext from '../i18n/languageContext'
import { navigate } from 'gatsby'
import LanguageButton from './LanguageButton'

const { isTranslatedPath, getTranslatedPath } = require('../i18n/translatedPathHelper')

export default function LanguageChooser(props) {

  const { language, setLanguage } = useContext(languageContext)


  const selectLanguage = clickedLangCode => {
    // Clicking the already active flag changes language to other language
    // Implemented because mobile there is only one flag
    const clickedActiveFlag = clickedLangCode === language;
    const otherLangCode = clickedLangCode === 'de' ? 'en' : 'de';
    const langCodeToChangeTo = clickedActiveFlag ? otherLangCode : clickedLangCode
    const { pathname } = location;

    setLanguage(langCodeToChangeTo)

    if (isTranslatedPath(pathname)) {
      navigate(getTranslatedPath(pathname, langCodeToChangeTo))
    }
  }

  return (
    <div>
      <LanguageButton
        active={language === 'en'}
        onClick={() => selectLanguage('en')}
        Icon={UnitedStatesSvg}
      />
      <LanguageButton
        active={language === 'de'}
        onClick={() => selectLanguage('de')}
        Icon={GermanySvg}
      />
    </div>
  )

}

