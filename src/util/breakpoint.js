import { vars } from './vars'

const helperFunction = breakpointName => {
  const rule = vars.breakpoints[breakpointName]

  if (!rule) {
    throw new Error(`Breakpoint name ${breakpointName} not defined`)
  }

  return `@media ${rule}`
}

// Make clean syntax possible in stlyed components
// ${on('onlyMobile') { ... }}

export const on = helperFunction
export const breakpoint = helperFunction
