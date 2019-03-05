import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import PolaroidStack from '../components/PolaroidStack'
import AboutMeBackgroundSvg from 'svg/about-me-background.svg'

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
  padding: 0.5rem 1.2rem;
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
  min-height: 350px;
`

StyledIntro.Image = styled.div`
  padding-right: 1rem;
  flex: 1;
`

StyledIntro.Text = styled.div`
  flex: 1;
`

const StyledBackgroundWrapper = styled.div`
  position: relative;
  z-index: ${vars.styles.zIndices.base};
`

StyledBackgroundWrapper.Image = styled(AboutMeBackgroundSvg)`
  position: absolute;
  top: -1rem;
  z-index: -1;
  left: 0;
`
StyledBackgroundWrapper.Content = styled.div`
  z-index: 1;
`

const IndexPage = () => (
  <Layout>
    <PageLayout>
      <StyledBackgroundWrapper>
        <StyledBackgroundWrapper.Image> </StyledBackgroundWrapper.Image>
        <StyledBackgroundWrapper.Content>
          <StyledPageHeading>
            <StyledSpeachBubble>Heyo!</StyledSpeachBubble>
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
                Etwas genauer genommen plane, leite und entwickele ich seit 8
                Jahren Webanwendungen mit JavaScript und PHP .. und das echt mit
                viel Spaß.
              </p>

              <p>
                Ich bin davon überzeugt, dass man nur wirklich gut in Dingen
                ist, die man gerne tut.
              </p>
            </StyledIntro.Text>
          </StyledIntro>
          <StyledSubHeading>Und sonst so?</StyledSubHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            hic reprehenderit autem, ipsa, amet consequatur, facere molestias
            nulla alias quidem id labore sequi! Quae explicabo ullam voluptatum
            quia fugit fuga.
          </p>
        </StyledBackgroundWrapper.Content>
      </StyledBackgroundWrapper>
    </PageLayout>
  </Layout>
)

export default withIntl(IndexPage)
