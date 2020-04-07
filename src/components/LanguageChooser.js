import React, { useContext } from 'react'
import { GermanySvg, UnitedStatesSvg } from 'src/svg'
import languageContext from '../i18n/languageContext'
import { navigate } from 'gatsby'
import LanguageButton from './LanguageButton'
import pageContext from '../gatsby-node/pageContext'

const { isTranslatedPath, getTranslatedPath } = require('../i18n/translatedPathHelper')

export default function LanguageChooser(props) {

  const { language, setLanguage } = useContext(languageContext)
  const { path: currentPagePath } = useContext(pageContext);


  const selectLanguage = clickedLangCode => {
    // Clicking the already active flag changes language to other language
    // Implemented because mobile there is only one flag
    const clickedActiveFlag = clickedLangCode === language;
    const otherLangCode = clickedLangCode === 'de' ? 'en' : 'de';
    const langCodeToChangeTo = clickedActiveFlag ? otherLangCode : clickedLangCode

    setLanguage(langCodeToChangeTo)

    if (isTranslatedPath(currentPagePath)) {
      navigate(getTranslatedPath(currentPagePath, langCodeToChangeTo))
    }
  }

  return (
    <div>
      <LanguageButton
        active={language === 'en'}
        onClick={() => selectLanguage('en')}
        Icon={UnitedStatesSvg}
        label="en"
      />
      <LanguageButton
        active={language === 'de'}
        onClick={() => selectLanguage('de')}
        Icon={GermanySvg}
        label="de"
      />
    </div>
  )

}

