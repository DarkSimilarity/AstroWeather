module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#101010',
        'light': '#f4f4f4',
      },
      backgroundImage: {
        'sunny': "url('../img/Sunny.webp')",
        'fog': "url('../img/Fog.jpg')",
        'cloudy': "url('../img/Cloudy.webp')",
        'blizzard': "url('../img/Blizzard.jpg')",
        'mist': "url('../img/Mist.jpg')",
        'heavyRain': "url('../img/HeavyRain.jpg')",
        'overcast': "url('../img/Overcast.jpg')",
        'snow': "url('../img/Snow.jpg')",
        'thunder': "url('../img/Thunder.jpg')",
        'partlyCloudy': "url('../img/PartlyCloudy.webp')",
        'rain': "url('../img/Rain.webp')",
        'drizzle': "url('../img/Drizzle.jpg')",
        'shower': "url('../img/Shower.jpg')",
        'settings': "url('../img/Settings.webp')",
        'test': "url('../img/test.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}