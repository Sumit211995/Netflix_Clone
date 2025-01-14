/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
            sans: ['var(--font-sans)'],
            ivymode: ['ivymode'],
            georgia: ['Georgia Pro', 'serif'],
            verdana: ['Verdana', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
            sans: ['DM Sans', 'sans-serif'],
            arboria: ['Arboria', 'sans-serif'],
            inder: ['Inder', 'sans-serif'],
            'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
        'neue-haas-grotesk-display-pro': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
        livvic: ['Livvic', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        museum: ['"LT Museum"', 'sans-serif'],
        apercu: ['Apercu Pro', 'sans-serif'],
        },
    extend: {
      screens: {
        'xsm': '552px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '769px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... },

        '3xl': '1714px',    
        // => @media (min-width: 1714px) { ... }

        '4xl': '1928px',
        // => @media (min-width: 1928px) { ... }

        '5xl': '2571px',
        // => @media (min-width: 2571px) { ... }

        '3xlmx': { 'max': '1713px' },
        // => @media (max-width: 1713px) { ... }

        '2xlmx': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xlmx': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lgmx': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'mdmx': { 'max': '768px' },
        // => @media (max-width: 767px) { ... }

        'smmx': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }

        'xsmmx': { 'max': '420px' },
        // => @media (max-width: 420px) { ... }
    },
    },
  },
  plugins: [],
}