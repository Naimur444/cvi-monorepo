/**
 * Theme utility functions for consistent color usage across components
 * Provides helper functions to get theme-aware colors
 */

export const themeColors = {
  light: {
    background: '#F4F3F7',
    primaryText: '#0E4F53',
    secondaryText: '#181818',
    mutedText: '#6B7280',
    accent: '#003C42',
    headerBg: 'rgba(244, 243, 247, 0.8)',
    border: '#E5E7EB',
    hover: 'rgba(0, 0, 0, 0.05)',
    cardBg: '#FAF9FC',
  },
  dark: {
    background: '#131313',
    primaryText: '#0E4F53',
    secondaryText: '#BDBDBD',
    mutedText: '#989898',
    accent: '#057C80',
    headerBg: 'rgba(19, 19, 19, 0.8)',
    border: '#404040',
    hover: 'rgba(255, 255, 255, 0.1)',
    cardBg: '#191919',
  }
} as const

/**
 * Get theme-aware color value
 */
export function getThemeColor(
  isDarkMode: boolean, 
  colorKey: keyof typeof themeColors.light
): string {
  return isDarkMode ? themeColors.dark[colorKey] : themeColors.light[colorKey]
}

/**
 * Get CSS custom property for theme color
 */
export function getThemeVar(colorKey: string): string {
  return `var(--theme-${colorKey})`
}

/**
 * Get the accent color for current theme
 * This is the main function for #003C42 -> #057C80 conversion
 */
export function getAccentColor(isDarkMode: boolean): string {
  return isDarkMode ? '#057C80' : '#003C42'
}

/**
 * Get muted text color for current theme
 * Black text (#181818) -> Gray text (#989898) in dark mode
 */
export function getMutedTextColor(isDarkMode: boolean): string {
  return isDarkMode ? '#989898' : '#6B7280'
}

/**
 * Get card background color for current theme
 * Light card background (#FAF9FC) -> Dark card background (#191919) in dark mode
 */
export function getCardBackgroundColor(isDarkMode: boolean): string {
  return isDarkMode ? '#191919' : '#FAF9FC'
}

/**
 * Create theme-aware style object
 */
export function createThemeStyle(
  isDarkMode: boolean,
  styles: Partial<Record<keyof typeof themeColors.light, string>>
): React.CSSProperties {
  const result: React.CSSProperties = {}
  
  Object.entries(styles).forEach(([key, cssProperty]) => {
    if (cssProperty && key in themeColors.light) {
      const colorKey = key as keyof typeof themeColors.light
      result[cssProperty as keyof React.CSSProperties] = getThemeColor(isDarkMode, colorKey)
    }
  })
  
  return result
}
