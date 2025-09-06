/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Colores personalizados según especificaciones
        primary: {
          50: '#FFFBF0',
          100: '#FFF3C4',
          200: '#FFE082',
          300: '#FFCC02',
          400: '#FFC107', // Amarillo mostaza principal
          500: '#FF8F00',
          600: '#FF6F00',
          700: '#E65100',
          800: '#BF360C',
          900: '#3E2723'
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5', // Gris claro para áreas secundarias
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E', // Gris medio para texto secundario
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121' // Negro suave para texto principal
        },
        amber: {
          50: '#FFFBF0',
          100: '#FFF3C4',
          200: '#FFE082',
          300: '#FFCC02',
          400: '#FFC107',
          500: '#FFC107', // Amarillo mostaza para CTAs
          600: '#FFB300',
          700: '#FF8F00',
          800: '#FF6F00',
          900: '#E65100'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        'w-1': 1,
        'h-1': 1,
      }
    },
  },
  plugins: [],
};