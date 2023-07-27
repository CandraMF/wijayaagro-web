const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    productionBrowserSourceMaps:true,
    reactStrictMode: true,
    // async redirects() {
    //     return [
    //       {
    //         source: '/about',
    //         destination: '/',
    //         permanent: true,
    //       },
    //     ]
    //   },
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        // colors: {
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     white: '#ffffff',
        //     black: '#000000',
        //     orange: {
        //         dark:'#ff8000',
        //         light:'#ffbf00',
        //     },
        //     blue: {
        //         dark:'#0000ff',
        //         light:'#00bfff',
        //     },
        //     yellow: '#ffff00',
        //     brown: {
        //       dark: '#684527',
        //       light: '#aa9578',
        //     },
        // },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                montserrat: ['Montserrat'],
                lato: ['Lato'],
                garamond: ['Garamond'],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("daisyui"),
    ],
}



