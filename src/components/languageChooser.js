import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GermanySvg, UnitedStatesSvg } from 'svg'
import { on } from 'util/breakpoint'

class LanguageChooser extends Component {
  static contextTypes = {
    language: PropTypes.object,
  }

  state = {
    value: '',
  }

  componentDidMount() {
    const { language } = this.context
    this.setState({
      value: language.locale || language.detected,
      language,
      options: ['de', 'en'],
    })
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

    this.setState({ langCodeToChangeTo }, () => {
      localStorage.setItem('language', langCodeToChangeTo)
      // todo use router to redirect
      window.location.href = `/${langCodeToChangeTo}${originalPath}`
    })
  }

  render() {
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
  opacity: ${props => (props.active ? '1' : '0.5')};

  ${on('onlyMobile')} {
    display: ${props => (props.active ? 'inline-block' : 'none')};
  }
`

export default styled(LanguageChooser)``
