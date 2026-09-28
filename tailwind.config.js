/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // System fonts: SF Pro style on macOS, Segoe UI on Windows, Helvetica fallback.
        // Designed to evoke editorial restraint without external font load.
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Helvetica',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
        ],
        serif: [
          '"New York"',
          '"Times New Roman"',
          '"Songti SC"',
          '"SimSun"',
          'serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
      colors: {
        // Restrained, editorial palette.
        ink: {
          DEFAULT: '#111111',
          soft: '#1f1f1f',
          muted: '#5c5c5c',
          faint: '#8a8a8a',
        },
        paper: {
          DEFAULT: '#fafaf7', // off-white
          alt: '#f4f3ee',
          line: '#e6e4dd',
        },
        accent: {
          DEFAULT: '#2c4a52', // muted deep teal — academic, finance-friendly
          soft: '#3a6b76',
        },
      },
      letterSpacing: {
        tightish: '-0.015em',
        editorial: '0.18em',
      },
      maxWidth: {
        prose: '70ch',
        page: '1120px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};