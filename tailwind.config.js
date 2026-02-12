export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kumbh Sans"', 'sans-serif'],
        serif: ['"Kumbh Sans"', 'sans-serif'], // Overriding serif to force usage if any remains
      },
      colors: {
        // Preserving existing color theme if custom colors were used, 
        // essentially relying on standard tailwind colors + amber/orange 
        // as seen in codebase.
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '30': '7.5rem', // 120px
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px', // Limiting max width slightly for better reading
        '2xl': '1400px',
      },
       container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
}
