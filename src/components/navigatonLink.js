import React, { Component } from 'react'
import Link from 'i18n/Link'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import { on } from 'util/breakpoint'
import { rgba } from 'util/mixins'

export default class NavigatonLink extends Component {
  render() {
    const { idOfText, to, icon, isPageLogo } = this.props
    return (
      <StyledLink activeClassName="active" to={to}>
        {this.renderIcon({ icon, isPageLogo })}
        {idOfText && (
          <StyledText>
            <FormattedMessage id={idOfText} />
          </StyledText>
        )}
      </StyledLink>
    )
  }
  renderIcon({ icon, isPageLogo }) {
    if (isPageLogo) {
      return <StyledIconLogo>{icon}</StyledIconLogo>
    }
    return <StyledIconPage>{icon}</StyledIconPage>
  }
}

const StyledLink = styled(Link)`
  &.active {
    > * {
      color: ${vars.styles.colors.neutral1};
    }
    .page-link-icon {
      path {
        fill: ${vars.styles.colors.neutral1};
      }
    }
    ${on('onlyMobile')} {
      background: ${rgba(vars.styles.colors.white, 0.2)};
      border-bottom: none;
    }
  }
  ${on('onlyMobile')} {
    border-bottom: 1px solid ${vars.styles.colors.neutral4};
  }
`

// todo: animation
const StyledText = styled.div`
  text-align: center;
  /* transform: translateX(-5rem);  */
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: ${vars.styles.fontSizes.size0};
  color: ${vars.styles.colors.neutral4};

  ${on('onlyMobile')} {
    font-size: ${vars.styles.fontSizes.size3};
    font-weight: normal;
    margin-bottom: 0;
    display: flex;
    color: ${vars.styles.colors.neutral1};
  }
`

const StyledIcon = styled.div`
  svg {
    display: block;
    width: 1.5rem;
    height: auto;
    margin: 0 auto;
  }
  margin-bottom: 0.5rem;

  ${on('onlyMobile')} {
    svg {
      width: 2rem;
    }
    margin-bottom: 1rem;
  }
`

const StyledIconPage = styled(StyledIcon)`
  svg {
    path {
      fill: ${vars.styles.colors.neutral4};
    }
  }
  ${on('onlyMobile')} {
    svg {
      path {
        fill: ${vars.styles.colors.neutral2};
      }
    }
  }
`

const StyledIconLogo = styled(StyledIcon)`
  margin-bottom: 1.5rem;
  svg {
    width: 2rem;
  }
`
