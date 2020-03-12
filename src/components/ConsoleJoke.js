import React from 'react'
import { isSearchEngineBot } from '../util/isSearchEngineBot'
import { isSupportedBrowser } from '../util/isSupportedBrowser'

export default function UnsupportedBrowserRedirect() {
  if (typeof window !== 'undefined') {
    console.log(`%c ________________________________________
           MMM.           .MMM
           MMMMMMMMMMMMMMMMMMM
           MMMMMMMMMMMMMMMMMMM      _____________________________________________________
          MMMMMMMMMMMMMMMMMMMMM    | Hey awesome developer, let's be friends!           |
         MMMMMMMMMMMMMMMMMMMMMMM   | The code is on GitHub btw, you seem interested!    |
        MMMMMMMMMMMMMMMMMMMMMMMM   | https://github.com/simonvomeyser/simonvomeyser.de  |
        MMMM::- -:::::::- -::MMMM  |____________________________________________________|
         MM~:~   ~:::::~   ~:~MM    |/
    .. MMMMM::. .:::+:::. .::MMMMM ..
          .MM::::: ._. :::::MM.
             MMMM;:::::;MMMM
      -MM        MMMMMMM
      ^  M+     MMMMMMMMM
          MMMMMMM MM MM MM
               MM MM MM MM
               MM MM MM MM
            .~~MM~MM~MM~MM~~.
         ~~~~MM:~MM~~~MM~:MM~~~~
        ~~~~~~==~==~~~==~==~~~~~~
         ~~~~~~==~==~==~==~~~~~~
             :~==~==~==~==~~
                ||     ||`, "font-family:monospace")

  }
  return null
}
