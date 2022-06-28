/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                bgPrimary: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)'
            },
            colors: {
                teal: {
                    100: '#d6f3fc',
                    200: '#ade7f9',
                    300: '#85dbf6',
                    400: '#5ccff3',
                    500: '#33c3f0',
                    600: '#299cc0',
                    700: '#1f7590',
                    800: '#144e60',
                    900: '#0a2730'
                }
            }
        }
    },
    plugins: []
};
