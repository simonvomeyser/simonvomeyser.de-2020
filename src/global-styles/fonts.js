import OpenSans300Eot from '../fonts/open-sans-v17-latin-300.eot'
import OpenSans300Woff from '../fonts/open-sans-v17-latin-300.woff'
import OpenSans300Woff2 from '../fonts/open-sans-v17-latin-300.woff2'
import OpenSans300Ttf from '../fonts/open-sans-v17-latin-300.ttf'

import OpenSansRegularEot from '../fonts/open-sans-v17-latin-regular.eot'
import OpenSansRegularWoff from '../fonts/open-sans-v17-latin-regular.woff'
import OpenSansRegularWoff2 from '../fonts/open-sans-v17-latin-regular.woff2'
import OpenSansRegularTtf from '../fonts/open-sans-v17-latin-regular.ttf'

import OpenSans700Eot from '../fonts/open-sans-v17-latin-700.eot'
import OpenSans700Woff from '../fonts/open-sans-v17-latin-700.woff'
import OpenSans700Woff2 from '../fonts/open-sans-v17-latin-700.woff2'
import OpenSans700Ttf from '../fonts/open-sans-v17-latin-700.ttf'

export const fonts = `
    /* open-sans-300 - latin */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url(${OpenSans300Eot}); /* IE9 Compat Modes */
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url(${OpenSans300Eot}) format('embedded-opentype'), /* IE6-IE8 */
        url(${OpenSans300Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${OpenSans300Woff}) format('woff'), /* Modern Browsers */
        url(${OpenSans300Ttf}) format('truetype'); /* Safari, Android, iOS */
    }
    /* open-sans-regular - latin */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansRegularEot}); /* IE9 Compat Modes */
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url(${OpenSansRegularEot}) format('embedded-opentype'), /* IE6-IE8 */
        url(${OpenSansRegularWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${OpenSansRegularWoff}) format('woff'), /* Modern Browsers */
        url(${OpenSansRegularTtf}) format('truetype'); /* Safari, Android, iOS */
    }
    /* open-sans-700 - latin */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSans700Eot}); /* IE9 Compat Modes */
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url(${OpenSans700Eot}) format('embedded-opentype'), /* IE6-IE8 */
        url(${OpenSans700Woff2}) format('woff2'), /* Super Modern Browsers */
        url(${OpenSans700Woff}) format('woff'), /* Modern Browsers */
        url(${OpenSans700Ttf}) format('truetype'); /* Safari, Android, iOS */
    }
`
