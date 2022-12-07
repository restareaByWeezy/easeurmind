import { createStitches } from '@stitches/react'

export const { getCssText } = createStitches()

export const { styled, css } = createStitches({
  theme: {
    colors: {
      primary: '#0B0A07',

      background: '#F4E6D9',
      almond: '#F4E6D9',
      red: '#F04848',
      orange: '#f09018',
      yellow: '#f2ca00',
      blue: '#18a8f0',
      green: '#21af5c',

      // GrayScale
      GRAY9: '#0a0a0a',
      GRAY8: '#1b1d1f',
      GRAY7: '#26282b',
      GRAY6: '#464c53',
      GRAY5: '#73787f',
      GRAY4: '#9ea4aa',
      GRAY3: '#c9cdd2',
      GRAY2: '#e8ebed',
      GRAY1: '#f7f8f9',

      BLUE9: '#0C2C70',
      BLUE8: '#153F88',
      BLUE7: '#2159A9',
      BLUE6: '#3078CA',
      BLUE5: '#429AEB',
      BLUE4: '#6FBAF3',
      BLUE3: '#8DD0F9',
      BLUE2: '#B4E5FD',
      BLUE1: '#D9F4FE',

      GTRANS4: 'rgba(176, 179, 188, 0.7)',
      GTRANS3: 'rgba(176, 179, 188, 0.5)',
      GTRANS2: 'rgba(176, 179, 188, 0.3)',
      GTRANS1: 'rgba(176, 179, 188, 0.1)',

      // TextColor
      primary_text: '#0B0A07', //Gray 8
      secondary_text: '#464c53', //Gray 6
      tertiary_text: '#9ea4aa', //Gray 4
      white: '#ffffff',

      // btn
      primary_btn: '#0B0A07',
      primary_pressed: '#3078CA',
      secondary_btn: '#464C53',
      secondary_pressed: '#26282B',
      tertiary_btn: '#E8EBED',
      tertiary_pressed: '#C9CDD2',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      H1: '32px',
      H2: '26px',
      H4: '18px',
      BODY1: '15px',
      BODY2: '12px',
      BODY3: '11px',
      CAPTION: '10px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      bold: 700,
      semiBold: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      H1: '32px',
      H2: '26px',
      H4: '18px',
      BODY1: '15px',
      BODY2: '12px',
      BODY3: '11px',
      CAPTION: '10px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    },
    zIndices: {
      GNB: 1000,
      DROPDOWN: 1001,
      CHECK_ICON: 11,
      CHECK_BOX: 10,
    },
    transitions: {},
  },
})
