import React, { useContext } from 'react'
import posed from 'react-pose'
import NavigationLink from 'src/components/NavigatonLink'
import { LogoNavigationSvg, PaperPlaneSvg, ProjectsSvg, UserSvg } from 'src/svg'
import { on } from 'src/util/breakpoint'
import { vars } from 'src/util/vars'
import styled from 'styled-components'
import pageContext from '../gatsby-node/pageContext'

export default function Navigation() {

  const { isFrontpage } = useContext(pageContext)

  return (
    <PosedWrapper isFrontpage={isFrontpage}>
      <div>
        <StyledNavigationTop>
          <nav>
            <ul>
              <PosedLogoLi>
                <NavigationLink
                  to="/"
                  isPageLogo
                  icon={<LogoNavigationSvg />}
                />
              </PosedLogoLi>
              <PosedLi>
                <NavigationLink
                  to="/about-me"
                  logo
                  icon={<UserSvg />}
                  idOfText="navigationAboutMe"
                />
              </PosedLi>
              <PosedLi>
                <NavigationLink
                  to="/projects"
                  icon={<ProjectsSvg />}
                  idOfText="navigationProjects"
                />
              </PosedLi>
              <PosedLi>
                <NavigationLink
                  to="/contact"
                  icon={<PaperPlaneSvg />}
                  idOfText="navigationContact"
                />
              </PosedLi>
            </ul>
          </nav>
        </StyledNavigationTop>
      </div>
    </PosedWrapper>
  )
}

const StyledWrapper = styled.div`
  position: fixed;
  background-color: ${vars.styles.colors.neutral6};
  left: 0;
  top: 0;
  width: ${vars.styles.sizes.navigationWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${on('onlyMobile')} {
    display: none;
  }
`

const StyledNavigationTop = styled.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  li {
    text-align: center;
  }
`
const PosedWrapper = posed(StyledWrapper)({
  pageFadedIn: {
    x: '0%',
    staggerChildren: 100,
    delayChildren: ({ isFrontpage }) => {
      return isFrontpage ? 3300 : 1300;
    },
    delay: ({ isFrontpage }) => {
      return isFrontpage ? 3000 : 1000;
    },
    transition: { type: 'spring', damping: 20 },
  },
  pageInvisible: { x: '-100%' },
})

const PosedLogoLi = posed.li({
  pageFadedIn: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { type: 'spring', stiffness: 300, duration: 800 },
      default: { ease: 'linear', duration: 400 },
    },
  },
  pageInvisible: { scale: 0.2, opacity: 0 },
})

const PosedLi = posed.li({
  pageFadedIn: {
    x: '0%',
    opacity: 1,
    transition: {
      default: { type: 'spring', stiffness: 150, duration: 400, damping: 13 },
    },
  },
  pageInvisible: { x: '-100%', opacity: 0 },
})
