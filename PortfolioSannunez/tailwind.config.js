/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //FONTS
      fontFamily:{
        alternates: ['"Montserrat Alternates"', 'sans-serif'],
        koulen: ['koulen', 'sans-serif'],
      },
        
   // ANIMATIONS
   animation: {
    float: 'float 4s ease-in-out infinite alternate',
    textUpArt: 'textUpArt 0.8s ease-in-out 1 forwards',
    textUpStudent: 'textUpStudent 0.8s ease-in-out 1 forwards',
    textUpCat: 'textUpCat 0.8s ease-in-out 1 forwards',
    textUpLearning: 'textUpLearning 0.8s ease-in-out 1 forwards',
    textDownBilingual: 'textDownBilingual 0.8s ease-in-out 1 forwards',
    textChangeColor: 'textChangeColor 1s ease-in-out infinite alternate',
  },
  keyframes: {
    float: {
      '0%': { transform: 'translateY(0)' },
      '100%': { transform: 'translateY(-10px)' },
    },
    
    textUpArt: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-40px)', color: 'black'},
    },

    textUpStudent: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-95px)', color: 'black'},
    },

    textUpCat: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-50px)', color: 'black'},
    },

    textUpLearning: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-35px)', color: 'black'},
    },

    textDownBilingual: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(85px)', color: 'black'},
    },

    textChangeColor: {
      '0%': {color: '#070707'},
      '100%': {color: '#4A2499'}
    },
  },
},
},
  plugins: [],
}
