export const vars = {
  breakpoints: {
    onlyMobile: '(max-width: 786px)',
    mobile: '(max-width: 786px)',
    onlyTablet: '(min-width: 768px) and (max-width: 960px)',
    tablet: '(max-width: 969px)',
    onlyDesktop: '(min-width: 961px) and (max-width: 1400px)',
  },
  styles: {
    sizes: {
      navigationWidth: '3.5rem',
      navigationMobileHeight: '3rem',
      footerRevealHeight: '5rem',
    },
    zIndices: {
      base: 1,
      mobileNavigationList: 10,
      mobileNavigationBar: 20,
    },
    fontSizes: {
      size0: '10px',
      size1: '12px',
      size2: '14px',
      size3: '16px',
      size4: '18px',
      size5: '20px',
      size6: '24px',
      size7: '30px',
      size8: '36px',
      size9: '44px',
      size10: '60px',
      size11: '72px',
      base: '20px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#0C0C0C',
      neutral1: '#EEEFF1',
      neutral2: '#DDDDDD',
      neutral3: '#A7ABAF',
      neutral4: '#646C71',
      neutral5: '#4B5156',
      neutral6: '#3F474F',
      neutral7: '#292F34',
      neutral8: '#FBFBFC',
      neutral9: '#CCCACA',
      neutral10: '#FCFCFC',
      accent1: '#EFF5F5',
      accent2: '#BEDEDB',
      accent3: '#9EDAD4',
      accent4: '#6EB9B3',
      accent5: '#32B0A6',
      accent6: '#048C81',
      secondaryAccent1: '#F3E4E5',
      secondaryAccent2: '#EA8185',
      secondaryAccent3: '#E2787D',
      secondaryAccent4: '#E15258',
    },
    fontFamilies: {
      default: "'Open Sans', sans-serif",
      special: 'futura-pt, sans-serif',
    },
  },
}

export const primaryColor = vars.styles.colors.accent4
export const errorColor = vars.styles.colors.secondaryAccent4
