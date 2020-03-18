import customWrapRootElement from './src/gatsby-node/wrapRootElement';

export const onClientEntry = () => {
  localStorage.setItem('startedAt', Date.now())
  localStorage.setItem('hasNavigationAnimationRun', false)
}

export const wrapRootElement = customWrapRootElement;
