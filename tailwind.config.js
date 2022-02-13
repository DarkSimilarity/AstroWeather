module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#101010',
        'light': '#f4f4f4',
      },
      backgroundImage: {
        'sunny': "url('../img/Sunny.jpg')",
        'fog': "url('../img/Fog.jpg')",
        'cloudy': "url('../img/Cloudy.jpg')",
        'blizzard': "url('../img/Blizzard.jpg')",
        'mist': "url('../img/Mist.jpg')",
        'heavyRain': "url('../img/HeavyRain.jpg')",
        'overcast': "url('../img/Overcast.jpg')",
        'snow': "url('../img/Snow.jpg')",
        'thunder': "url('../img/Thunder.jpg')",
        'partlyCloudy': "url('../img/PartlyCloudy.jpg')",
        'rain': "url('../img/Rain.jpg')",
        'drizzle': "url('../img/Drizzle.jpg')",
        'shower': "url('../img/Shower.jpg')",
        'settings': "url('../img/Settings.jpg')",
        'test': "url('../img/test.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}