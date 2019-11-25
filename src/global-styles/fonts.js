import OpenSans300Eot from '../fonts/open-sans-v17-latin-300.eot'
import OpenSans300Woff from '../fonts/open-sans-v17-latin-300.woff'
import OpenSans300Woff2 from '../fonts/open-sans-v17-latin-300.woff2'

export const fonts = `
    /* open-sans-300 - latin */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url('${OpenSans300Eot}'); /* IE9 Compat Modes */
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url('${OpenSans300Eot}') format('embedded-opentype'), /* IE6-IE8 */
        url('${OpenSans300Woff2}') format('woff2'), /* Super Modern Browsers */
        url('${OpenSans300Woff}') format('woff'), /* Modern Browsers */
        url('../fonts/open-sans-v17-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
    }
    /* open-sans-regular - latin */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/open-sans-v17-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('../fonts/open-sans-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/open-sans-v17-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/open-sans-v17-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/open-sans-v17-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    }
    /* open-sans-700 - latin */
    @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/open-sans-v17-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('../fonts/open-sans-v17-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/open-sans-v17-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/open-sans-v17-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../fonts/open-sans-v17-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
    }
`
