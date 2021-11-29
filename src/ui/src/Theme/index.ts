import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes } from '@mui/material'
import React from 'react'
import edgeColors from './colors'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Array<React.CSSProperties['color']>
    border: React.CSSProperties['color']
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral: Array<React.CSSProperties['color']>
    border: React.CSSProperties['color']
  }
}

const spacing = 8

let darkTheme = createTheme({
  spacing,
  typography: {
    fontFamily: 'Gilroy, Source Code Pro, Source Sans Pro, Arial',
    htmlFontSize: 16
  },
  palette: {
    primary: {
      main: edgeColors.blue as string
    },
    secondary: {
      main: edgeColors.red as string
    },
    text: {
      primary: edgeColors.neutral[0]
    },
    background: {
      default: edgeColors.background
    },
    neutral: edgeColors.neutral,
    border: edgeColors.neutral[3],
    success: {
      main: edgeColors.blue as string,
      contrastText: edgeColors.neutral[0]
    },
    info: {
      main: edgeColors.green as string,
      contrastText: edgeColors.neutral[0]
    },
    warning: {
      main: edgeColors.gold as string,
      contrastText: edgeColors.neutral[0]
    },
    error: {
      main: edgeColors.red as string,
      contrastText: edgeColors.neutral[0]
    }
  },
})

darkTheme = responsiveFontSizes(darkTheme)

export default darkTheme

