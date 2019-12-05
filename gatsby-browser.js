export const onClientEntry = () => {
  localStorage.setItem('startedAt', Date.now())
  localStorage.setItem('hasNavigationAnimationRun', false)
}
