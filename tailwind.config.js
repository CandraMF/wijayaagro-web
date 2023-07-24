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
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        daisyui: {
            themes: ["light", "dark", "cupcake"],
          },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require("daisyui")
    ],
}



