import React, { Component } from 'react'

import styled from 'styled-components'
import { MailSvg, XingSvg, TwitterSvg } from 'src/svg'

export default class SocialLinks extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledIconLink
          href="https://twitter.com/simonvomeyser"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSvg />
        </StyledIconLink>
        <StyledIconLink
          href="mailto:simon.vom.eyser@gmail.com"
          title="Mail me maybe?"
        >
          <MailSvg />
        </StyledIconLink>
        <StyledIconLink
          href="https://www.xing.com/profile/Simon_vomEyser"
          title="Xing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XingSvg />
        </StyledIconLink>
      </StyledWrapper>
    )
  }
}
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`

const StyledIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50px;
  height: 100%;
  margin: 0 1rem;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }
`
