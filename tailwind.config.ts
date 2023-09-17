import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'erdiagram-dark': "url('/images/erdiagram-dark.png')",
        'erdiagram': "url('/images/erdiagram.png')",
        'grid-slate': "url('/images/grid.svg')", 
        'dot-slate': "url('/images/dot.svg')", 
      },
      boxShadow: {
        'tr': '10px -10px 20px -5px rgba(0,0,0,0.1)', 
      }, 
      colors: {
        'primary': colors.indigo
      }, 
      fontFamily: {
        'hero': ['Quicksand']
      }, 
      height: {
        '50vh': '50vh', 
        '60vh': '60vh', 
        '70vh': '70vh', 
        '75vh': '75vh', 
        '80vh': '80vh', 
        '90vh': '90vh', 
      }, 
      text: {
        'primary': colors.indigo
      }, 
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
export default config
