/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                bgPrimary: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)'
            }
        }
    },
    plugins: []
};
