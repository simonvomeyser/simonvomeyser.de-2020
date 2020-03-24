import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

export default ({ children }) => (
   <PosedWrapper initialPose="pageInvisible" pose="pageFadedIn">
      {children}
   </PosedWrapper>
)

const StyledWrapper = styled.div`
   opacity: 0;
`;

const PosedWrapper = posed(StyledWrapper)({
   pageFadedIn: {
      opacity: 1,
      transition: { duration: 700 }
   },
   pageInvisble: {
      opacity: 0,
   }
})
