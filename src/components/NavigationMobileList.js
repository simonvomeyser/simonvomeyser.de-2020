import React from 'react'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { rgba } from 'src/util/mixins'

import { UserSvg, ProjectsSvg, PaperPlaneSvg } from 'src/svg'
import NavigationLink from 'src/components/NavigatonLink'
import posed from 'react-pose'

export default function NavigationMobileList(props) {
  return (
    <PosedWrapper pose={props.open ? 'visible' : 'hidden'}>
      <nav>
        <ul onClick={props.toggleMenu}>
          <PosedListElement>
            <NavigationLink
              to="/about-me"
              logo
              icon={<UserSvg />}
              idOfText="navigationAboutMe"
            />
          </PosedListElement>
          <PosedListElement>
            <NavigationLink
              to="/projects"
              icon={<ProjectsSvg />}
              idOfText="navigationProjects"
            />
          </PosedListElement>
          <PosedListElement>
            <NavigationLink
              to="/contact"
              icon={<PaperPlaneSvg />}
              idOfText="navigationContact"
            />
          </PosedListElement>
        </ul>
      </nav>
    </PosedWrapper>
  )
}

const StyledWrapper = styled.div`
  height: 0;
  width: 100%;
  background: ${rgba(vars.styles.colors.neutral6, 0.9)};

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    flex: 1;
  }
  a {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
const PosedListElement = posed('li')({
  visible: {
    applyAtStart: { display: 'block' },
    opacity: 1,
    y: 0,
  },
  hidden: {
    y: -20,
    opacity: 0,
    applyAtStart: { display: 'none' },
  },
})

const PosedWrapper = posed(StyledWrapper)({
  visible: {
    height: '106px',
    staggerChildren: 100,
    delayChildren: () => {
      return 100
    },
  },
  hidden: { height: 0 },
})
