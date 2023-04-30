/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            Mitr: ['Mitr', 'sans-serif'],
            MitrMed: ['MitrMed', 'sans-serif'],
            MitrBold: ['MitrBold', 'sans-serif'],
            Sarabun: ['Sarabun', 'sans-serif'],
            SarabunBold: ['SarabunBold', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
