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
        'fog': "url('../img/Fog.webp')",
        'cloudy': "url('../img/Cloudy.webp')",
        'blizzard': "url('../img/Blizzard.webp')",
        'mist': "url('../img/Mist.webp')",
        'heavyRain': "url('../img/HeavyRain.webp')",
        'overcast': "url('../img/Overcast.webp')",
        'snow': "url('../img/Snow.webp')",
        'thunder': "url('../img/Thunder.webp')",
        'partlyCloudy': "url('../img/PartlyCloudy.webp')",
        'rain': "url('../img/Rain.webp')",
        'drizzle': "url('../img/Drizzle.webp')",
        'shower': "url('../img/Shower.webp')",
        'settings': "url('../img/Settings.webp')",
        'start': "url('../img/Start.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}