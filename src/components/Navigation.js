import React from 'react'
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

export default function Navigation(props) {
    return (
        <div>
          <NavigationDesktop {...props} />
          <NavigationMobile />
        </div>
    )
}
