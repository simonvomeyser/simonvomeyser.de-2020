import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import PolaroidStack from '../components/PolaroidStack'

const StyledSubHeading = styled.h2`
  color: ${vars.styles.colors.neutral6};
  font-size: ${vars.styles.fontSizes.size5};
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 1rem;
`

const StyledPageHeading = styled.h1`
  font-size: ${vars.styles.fontSizes.size7};
  font-family: ${vars.styles.fontFamilies.special};
  display: flex;
  justify-content: center;
  color: ${vars.styles.colors.accent4};
  align-items: center;
  margin-bottom: 3rem;
`

const StyledSpeachBubble = styled.span`
  color: ${vars.styles.colors.white};
  font-family: ${vars.styles.fontFamilies.normal};
  position: relative;
  padding: 0.75rem 1.5rem;
  background-color: ${vars.styles.colors.accent4};
  display: inline-block;
  margin-right: 1rem;
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 20%;
    border-top: 20px solid ${vars.styles.colors.accent4};
    border-right: 20px solid transparent;
    width: 0;
    height: 0;
  }
`

const StyledIntro = styled.div`
  display: flex;
`

StyledIntro.Image = styled.div`
  padding-right: 1rem;
  flex: 1;
`

StyledIntro.Text = styled.div`
  flex: 1;
`

const IndexPage = () => (
  <Layout>
    <PageLayout>
      <StyledPageHeading>
        <StyledSpeachBubble>Hey!</StyledSpeachBubble>
        <span>Schön dich zu treffen :)</span>
      </StyledPageHeading>
      <StyledIntro>
        <StyledIntro.Image>
          <PolaroidStack
            images={[
              'https://res.cloudinary.com/simonvomeyser/image/upload/v1551546212/simonvomeyser.de/about-me-1.png',
              'https://res.cloudinary.com/simonvomeyser/image/upload/v1551691377/simonvomeyser.de/about-me-2.jpg',
            ]}
          />
        </StyledIntro.Image>
        <StyledIntro.Text>
          <StyledSubHeading>
            Ich bin Simon und ich mache "irgendwas mit Webseiten"
          </StyledSubHeading>
          <p>
            Etwas genauer genommen plane, leite und entwickele ich seit 8 Jahren
            Webanwendungen mit JavaScript und PHP .. und das echt mit viel Spaß.
          </p>

          <p>
            Ich bin davon überzeugt, dass man nur wirklich gut in Dingen ist,
            die man gerne tut.
          </p>
        </StyledIntro.Text>
      </StyledIntro>
    </PageLayout>
  </Layout>
)

export default withIntl(IndexPage)
