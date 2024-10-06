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
        
      // SCREENS
      screens:{
        'max-lg':{'min':'769px', 'max':'1024px'},
        'max-md':{'min':'426px','max':'768px'},  
        'max-sm':{'max':'425px'},  
      },

   // ANIMATIONS
   animation: {
    float: 'float 4s ease-in-out infinite alternate',

    spinFooter: 'spinFooter 10s linear infinite',

    textUpArt: 'textUpArt 0.8s ease-in-out 1 forwards',
    textUpArtMobile: 'textUpArtMobile 0.8s ease-in-out 1 forwards',
    textUpArtTablet: 'textUpArtTablet 0.8s ease-in-out 1 forwards',

    textUpStudent: 'textUpStudent 0.8s ease-in-out 1 forwards',
    textUpStudentMobile: 'textUpStudentMobile 0.8s ease-in-out 1 forwards',
    textUpStudentTablet: 'textUpStudentTablet 0.8s ease-in-out 1 forwards',

    textUpCat: 'textUpCat 0.8s ease-in-out 1 forwards',
    textUpCatMobile: 'textUpCatMobile 0.8s ease-in-out 1 forwards',
    textUpCatTablet: 'textUpCatTablet 0.8s ease-in-out 1 forwards',

    textUpLearning: 'textUpLearning 0.8s ease-in-out 1 forwards',
    textUpLearningMobile: 'textUpLearningMobile 0.8s ease-in-out 1 forwards',
    textUpLearningTablet: 'textUpLearningTablet 0.8s ease-in-out 1 forwards',

    textDownBilingual: 'textDownBilingual 0.8s ease-in-out 1 forwards',
    textDownBilingualMobile: 'textDownBilingualMobile 0.8s ease-in-out 1 forwards',
    textDownBilingualTablet: 'textDownBilingualTablet 0.8s ease-in-out 1 forwards',
    textDownBilingualLarge: 'textDownBilingualLarge 0.8s ease-in-out 1 forwards',

    textChangeColor: 'textChangeColor 1s ease-in-out infinite alternate',

    textUpcoming: 'textUpcoming 3s ease-in-out infinite alternate'
  },
  keyframes: {
    float: {
      '0%': { transform: 'translateY(0)' },
      '100%': { transform: 'translateY(-10px)' },
    },

    spinFooter :{
      '0%': {transform: 'rotate(0deg)'},
      '100%': {transform: 'rotate(360deg)'},
    },

    textUpArt: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': {transform: 'translateY(-40px)', color: 'black'},
    },

    textUpArtMobile: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-20px)', color: 'black'},
    },

    textUpArtTablet: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-25px)', color: 'black'},
    },

    textUpStudent: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-85px)', color: 'black'},
    },

    textUpStudentTablet: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-65px)', color: 'black'},
    },

    textUpStudentMobile: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-45px)', color: 'black'},
    },

    textUpCat: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-40px)', color: 'black'},
    },

    textUpCatMobile: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-25px)', color: 'black'},
    },

    textUpCatTablet: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-30px)', color: 'black'},
    },
  
    textUpLearning: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-35px)', color: 'black'},
    },

    textUpLearningMobile: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-15px)', color: 'black'},
    },

    textUpLearningTablet: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(-20px)', color: 'black'},
    },

    textDownBilingual: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(85px)', color: 'black'},
    },

    textDownBilingualLarge: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(70px)', color: 'black'},
    },

    textDownBilingualTablet: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(55px)', color: 'black'},
    },

    textDownBilingualMobile: {
      '0%': { transform: 'translateY(0)', color: 'transparent'},
      '60%': { color: 'transparent'},
      '100%': { transform: 'translateY(45px)', color: 'black'},
    },

    textChangeColor: {
      '0%': {color: '#070707'},
      '100%': {color: '#4A2499'}
    },

    textUpcoming:{
      '0%':{color: 'gray'},
      '100%':{color: 'black'}
    }
  },
},
},
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
