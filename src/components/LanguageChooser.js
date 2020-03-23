import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GermanySvg, UnitedStatesSvg } from 'src/svg'
import { on } from 'src/util/breakpoint'
import { navigate } from '../i18n/navigate'

class LanguageChooser extends Component {
  static contextTypes = {
    language: PropTypes.object,
  }

  constructor(props, context) {
    super()

    // const { language } = context

    // this.state = {
    //   value: language.locale || language.detected,
    //   language,
    //   options: ['de', 'en'],
    // }
  }

  selectLanguage = selectedLangCode => {
    const { originalPath } = this.state.language

    // Clicking the already active flag changes language to other language
    // Implemented because mobile there is only one flag
    const userClickedOnActiveFlag = selectedLangCode === this.state.value
    const otherLangCode = this.state.options.filter(
      langCodeOption => langCodeOption !== selectedLangCode
    )[0]
    const langCodeToChangeTo = userClickedOnActiveFlag
      ? otherLangCode
      : selectedLangCode

    this.setState({ value: langCodeToChangeTo }, () => {
      localStorage.setItem('language', langCodeToChangeTo)
      // todo use router to redirect
      navigate(originalPath, langCodeToChangeTo)
    })
  }

  render() {
    return null;
    if (!this.state.value) {
      return null
    }

    return (
      <div>
        <LanguageButton
          active={this.state.value === 'en'}
          onClick={() => this.selectLanguage('en')}
        >
          <UnitedStatesSvg />
        </LanguageButton>
        <LanguageButton
          active={this.state.value === 'de'}
          onClick={() => this.selectLanguage('de')}
        >
          <GermanySvg />
        </LanguageButton>
      </div>
    )
  }
}

const LanguageButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
  opacity: ${({ active }) => active ? '1' : '0.5'};
  transition: opacity 0.3s ease-in-out;

  ${on('onlyMobile')} {
    display: ${({ active }) => active ? 'inline-block' : 'none'};
  }
`

export default styled(LanguageChooser)``
