import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'i18n/Link'

const StyledBacklink = styled(Link)`
  svg {
    width: 24px;
    height: 24px;
  }
`

export const Backlink = props => {
  return (
    <StyledBacklink to="/your-mom">
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M28.0142 12.027H15.0142C14.8342 12.027 14.7152 11.934 14.6582 11.877C14.5652 11.784 14.5142 11.66 14.5142 11.527C14.5142 11.347 14.6062 11.228 14.6742 11.16L18.8412 6.828C19.5972 6.073 20.0132 5.068 20.0132 4C20.0132 2.933 19.5972 1.929 18.8412 1.172C18.0862 0.416 17.0822 0 16.0132 0C14.9452 0 13.9412 0.416 13.1972 1.16L1.47916 12.492C0.53516 13.436 0.0141602 14.691 0.0141602 16.027C0.0141602 17.363 0.53516 18.619 1.47916 19.562C1.53016 19.614 1.58516 19.658 1.64416 19.695L13.1852 30.855C13.9412 31.611 14.9452 32.027 16.0132 32.027C17.0822 32.027 18.0862 31.611 18.8412 30.855C19.5972 30.099 20.0132 29.094 20.0132 28.027C20.0132 26.959 19.5972 25.954 18.8552 25.213L14.6612 20.856C14.6062 20.799 14.5142 20.682 14.5142 20.501C14.5142 20.368 14.5652 20.244 14.6602 20.147C14.7152 20.093 14.8332 20 15.0142 20H28.0142C30.2092 20 32.0042 18.214 32.0142 16.01V15.974C31.9842 13.794 30.1972 12.027 28.0142 12.027ZM28.0142 18H15.0142C14.3442 18 13.7142 18.264 13.2432 18.736C12.7722 19.206 12.5142 19.833 12.5142 20.5C12.5142 21.168 12.7742 21.795 13.2332 22.254L17.4272 26.613C17.8052 26.991 18.0132 27.493 18.0132 28.027C18.0132 28.56 17.8052 29.062 17.4272 29.441C16.6712 30.197 15.3662 30.209 14.5872 29.429L2.88116 18.109C2.84516 18.074 2.80716 18.042 2.76616 18.013C2.28016 17.465 2.01416 16.767 2.01416 16.027C2.01416 15.226 2.32616 14.472 2.88116 13.918L14.5992 2.586C15.3552 1.83 16.6712 1.83 17.4272 2.586C17.8052 2.964 18.0132 3.466 18.0132 4C18.0132 4.534 17.8052 5.036 17.4122 5.429L13.2462 9.76C12.7732 10.233 12.5142 10.861 12.5142 11.529C12.5142 12.196 12.7732 12.823 13.2412 13.291C13.7142 13.765 14.3442 14.027 15.0142 14.027H28.0142C29.1122 14.027 30.0092 14.92 30.0142 16.008C30.0092 17.105 29.1112 18 28.0142 18Z"
            fill="#152A41"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="32.027" height="32.027" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </StyledBacklink>
  )
}
