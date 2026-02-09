import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './plugins/**/*.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      colors: {
        terminal: {
          green: '#00ff41',
          cyan: '#00d4ff',
          amber: '#ffb700',
          red: '#ff4757',
          blue: '#4b9eff',
          purple: '#c792ea',
          magenta: '#ff79c6',
        },
        dark: {
          DEFAULT: '#0a0e17',
          deeper: '#060a11',
          card: '#0d1117',
          'card-hover': '#161b22',
          surface: '#161b22',
        },
        text: {
          primary: '#e6edf3',
          secondary: '#8b949e',
          muted: '#484f58',
        },
        border: {
          subtle: 'rgba(48, 54, 61, 0.8)',
          light: 'rgba(48, 54, 61, 1)',
          glow: 'rgba(0, 255, 65, 0.2)',
        },
      },
      boxShadow: {
        sm: '0 2px 10px rgba(0, 0, 0, 0.4)',
        md: '0 8px 30px rgba(0, 0, 0, 0.5)',
        lg: '0 15px 60px rgba(0, 0, 0, 0.6)',
        glow: '0 0 20px rgba(0, 255, 65, 0.15)',
        'glow-strong': '0 0 40px rgba(0, 255, 65, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-amber': '0 0 20px rgba(255, 183, 0, 0.15)',
        'glow-btn': '0 4px 20px rgba(0, 255, 65, 0.3)',
        terminal: '0 0 0 1px rgba(48, 54, 61, 0.8), 0 16px 64px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        float: 'float 25s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.06' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(50px, -70px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 50px) scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}
