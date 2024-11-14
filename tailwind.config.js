/** @type {import('tailwindcss').Config} */
/* npm run build:css */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8C42', // Naranja principal del logo, reemplazo de text-gray-800
        },
        secondary: {
          DEFAULT: '#FFFFFF', // Blanco, reemplazo de text-white y bg-white
        },
        background: {
          DEFAULT: '#003366', // Gris claro estándar, reemplazo de bg-gray-100
        },
        accent: {
          red: '#FF8C42', // Reemplazo de bg-accent-red, ahora naranja
          blue: {
            400: '#003366', // Azul oscuro principal del logo, reemplazo de bg-accent-blue-400
            600: '#002244', // Azul más oscuro para variaciones, reemplazo de bg-accent-blue-600
          },
          green: '#FF8C42', // Reemplazo de bg-accent-green, ahora naranja
          pink: {
            200: '#FF8C42', // Naranja claro para reemplazo de bg-accent-pink-200
            300: '#FF8C42', // Naranja medio, reemplazo de bg-accent-pink-300
            400: '#FF8C42', // Naranja, reemplazo de bg-accent-pink-400
            500: '#FF8C42', // Naranja, reemplazo de bg-accent-pink-500
          },
        },
        neutral: {
          lightest: '#F7F7F7',    // Gris muy claro, bueno para fondos amplios y limpios
          light: '#F3F4F6',       // Gris claro estándar, para fondos generales
          lighter: '#E5E7EB',     // Gris claro intermedio, para secciones diferenciadas
          medium: '#9CA3AF',      // Gris medio, adecuado para bordes o fondos de contraste leve
          mediumlight: '#D1D5DB',// Gris medio claro, para secciones con contraste
          dark: '#4B5563',        // Gris oscuro para texto y elementos destacados
          darker: '#1F2937',      // Gris más oscuro, fondo alternativo
          darkest: '#111827',     // Gris casi negro, para secciones de alto contraste o fondos oscuros
        },
        overlay: {
          black: 'rgba(0, 0, 0, 1)', // Superposición negra translúcida, reemplazo de bg-black con opacidad
        },
      },
    },
  },
  plugins: [],
};
