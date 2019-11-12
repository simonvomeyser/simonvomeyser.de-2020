export const isContactText = text => {
  return text.replace(/\s|\n/, '').length > 15
}
