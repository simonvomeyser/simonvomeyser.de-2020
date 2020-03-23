import React from 'react'
import { FormattedMessage } from 'react-intl'
import { on } from 'src/util/breakpoint'
import { vars } from 'src/util/vars'
import styled from 'styled-components'
import { StyledPrimaryButtonLink } from '../styled-components/buttons'
import { primaryColor } from '../util/vars'

export default function NotFoundPage() {
  return (
    <StyledWrapper>
      <StyledHeading>404</StyledHeading>
      <StyledSubHeading>
        <FormattedMessage id="pageNotFoundSubHeading" />
      </StyledSubHeading>
      <StyledText>
        <FormattedMessage id="pageNotFoundText" />
      </StyledText>
      <StyledLink>
        <StyledPrimaryButtonLink to="/">
          <FormattedMessage id="pageNotFoundLink" />
        </StyledPrimaryButtonLink>
      </StyledLink>
    </StyledWrapper>
  )
}

const StyledHeading = styled.div`
  color: ${primaryColor};
  font-size: ${vars.styles.fontSizes.size9};
  font-weight: 500;
  font-family: ${vars.styles.fontFamilies.special};
  margin-bottom: 2rem;
`
const StyledSubHeading = styled.div`
  margin-bottom: 1rem;
  font-size: ${vars.styles.fontSizes.size6};
  line-height: 1.4;
`
const StyledText = styled.div`
  font-size: ${vars.styles.fontSizes.size5};
  margin-bottom: 2rem;
  color: ${vars.styles.colors.neutral5};
  line-height: 1.4;
`
const StyledLink = styled.div`
  font-size: ${vars.styles.fontSizes.size5};
`

const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  font-weight: 200;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;

  ${on('onlyMobile')} {
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  }
`
