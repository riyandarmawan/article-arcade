/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            colors: {
                primary: "#1e293b",
                secondary: "#f1f5f9"
            },
            fontFamily: {
                "title": ["Edu AU VIC WA NT Hand", "sans-serif"],
                "body": ["Poppins", "sans-serif"]
            }
        },
    },
    plugins: [],
};
