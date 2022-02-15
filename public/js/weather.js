// Document
var doc = document

function removetop() {
    doc.getElementById('top').classList.replace('z-[1]', '-z-[1]')

    anime({
        targets: '#top',        
        opacity: '0',
        duration: 1500,
        zIndex: {
            value: [10, -30],
            round: true
        },
        easing: 'easeInOutSine',
      });
}

function removeLocal() {
    localStorage.removeItem('first');
    localStorage.removeItem('place');
    localStorage.removeItem('unit');
    localStorage.removeItem('speed');

    return console.log('localStorage removed')
}

function storageCheck() {
    if (localStorage.getItem('place') == ''  || localStorage.getItem('speed') == '' || localStorage.getItem('unit') == '') {
        localStorage.removeItem('first');
        window.location.reload()
    } else {
        return null
    }
}

function addtop() {
    doc.getElementById('top').classList.replace('-z-[1]', 'z-[1]')

    anime({
        targets: '#top',        
        opacity: '1',
        duration: 1500,
        zIndex: {
            value: [-30, 10],
            round: true
        },
        easing: 'easeInOutQuad',
      });
}

// If user has already been through the welcome process, then recall values from localStorage
if (localStorage.getItem('first') == '1') {
    //check for localstorage values
    storageCheck()
    // initialize the api
    fetchWeather()
    // Remove the top layer
    removetop()
}

// If settings is clicked
function set() {
    // add the top layer
    addtop()

    // replace background image
    doc.getElementById('top').classList.replace('bg-test', 'bg-settings')
    // replace welcome text with settings
    doc.getElementById('setText').innerText = 'Settings'
}

async function fetchWeather() {
    // State the function has been called
    console.log('fetch initiated')

    // variables for inputs
    var c = doc.getElementById('celsi')
    var kph = doc.getElementById('kph')
    var major = doc.getElementById('major')

    // check the title to know what to do
    if (doc.getElementById('setText').innerText == 'Settings') {
        // check value of location
        if (doc.getElementById('place').value == '') {
            return null
        }

        // temp units
        if (c.checked) {
            localStorage.setItem('unit', 'Celsius')
        } else {
            localStorage.setItem('unit', 'Fahrenheit')
        }

        // speed units
        if (kph.checked) {
            localStorage.setItem('speed', 'kph')
        } else {
            localStorage.setItem('speed', 'mph')
        }

        // location
        var local = doc.getElementById('place').value
        localStorage.setItem('place', local)

        //remove top layer
        removetop()
    } else {
        // check local values
        if (localStorage.getItem('first') == '1') {

            var local = localStorage.getItem('place')

            removetop()
        } else {
            // if no local variables then welcome page

            // check value of location
            if (doc.getElementById('place').value == '') {
                return null
            }

            // temp units
            if (c.checked) {
                localStorage.setItem('unit', 'Celsius')
            } else {
                localStorage.setItem('unit', 'Fahrenheit')
            }

            // speed units
            if (kph.checked) {
                localStorage.setItem('speed', 'kph')
            } else {
                localStorage.setItem('speed', 'mph')
            }

            // location
            var local = doc.getElementById('place').value
            localStorage.setItem('place', local)

            //remove top layer
            removetop()
            localStorage.setItem('first', '1')
        }
    }

    // variables

    var maxtemp = doc.getElementById('maxtemp')
    var mintemp = doc.getElementById('mintemp')
    var feelslike = doc.getElementById('feelslike')
    var windspeed = doc.getElementById('windspeed')
    var gustspeed = doc.getElementById('gustspeed')
    var windchill = doc.getElementById('windchill')
    var clouds = doc.getElementById('clouds')
    var precipitation = doc.getElementById('precipitation')
    var humidity = doc.getElementById('humidity')
    var rainchance = doc.getElementById('rainchance')
    var dewpoint = doc.getElementById('dewpoint')
    var sunrise = doc.getElementById('sunrise')
    var sunset = doc.getElementById('sunset')
    var moonphase = doc.getElementById('moonphase')
    var condition = doc.getElementById('condition')
    var temp = doc.getElementById('temp')
    var location = doc.getElementById('location')
    var time = doc.getElementById('time')
    var bg = doc.getElementById('bg')

    // Fetch Data
    await fetch('https://api.weatherapi.com/v1/forecast.json?key=97a17acca844415cb5831439220402&q=' + local + '&days=1&aqi=yes&alerts=yes')
        .then(response => {
            if (response.ok) {
                return response.json();
              } else {
                removeLocal();
                window.location.reload()
              }
        })
        .then((data) => window.storm = data)


    var data = window.storm
    let forecast = data.forecast.forecastday[0]
    let current = data.current
    let astro = forecast.astro
    let con = current.condition

    // Data 

    // set the temp values
    if (localStorage.getItem('first') == '1') {
        if (localStorage.getItem('unit') == 'Celsius') {
            maxtemp.innerText = forecast.day.maxtemp_c + " \u00B0C"
            mintemp.innerText = forecast.day.mintemp_c + " \u00B0C"
            feelslike.innerText = current.feelslike_c + " \u00B0C"
            dewpoint.innerText = forecast.hour[0].dewpoint_c + " \u00B0C"
            windchill.innerText = forecast.hour[0].windchill_c + " \u00B0C"
            temp.innerText = current.temp_c + " \u00B0C"
        } else {
            maxtemp.innerText = forecast.day.maxtemp_f + " \u00B0F"
            mintemp.innerText = forecast.day.mintemp_f + " \u00B0F"
            feelslike.innerText = current.feelslike_f + " \u00B0F"
            dewpoint.innerText = forecast.hour[0].dewpoint_f + " \u00B0F"
            windchill.innerText = forecast.hour[0].windchill_f + " \u00B0F"
            temp.innerText = current.temp_f + " \u00B0F"
        }
    
        // set the speed values
        if (localStorage.getItem('speed') == 'kph') {
            windspeed.innerText = forecast.hour[0].wind_kph + ' kph'
            gustspeed.innerText = forecast.hour[0].gust_kph + ' kph'
        } else {
            windspeed.innerText = forecast.hour[0].wind_mph + ' mph'
            gustspeed.innerText = forecast.hour[0].gust_mph + ' mph'
        }
    } else {
        if (c.checked || localStorage.getItem('unit') == 'Celsius') {
            maxtemp.innerText = forecast.day.maxtemp_c + " \u00B0C"
            mintemp.innerText = forecast.day.mintemp_c + " \u00B0C"
            feelslike.innerText = current.feelslike_c + " \u00B0C"
            dewpoint.innerText = forecast.hour[0].dewpoint_c + " \u00B0C"
            windchill.innerText = forecast.hour[0].windchill_c + " \u00B0C"
            temp.innerText = current.temp_c + " \u00B0C"
        } else {
            maxtemp.innerText = forecast.day.maxtemp_f + " \u00B0F"
            mintemp.innerText = forecast.day.mintemp_f + " \u00B0F"
            feelslike.innerText = current.feelslike_f + " \u00B0F"
            dewpoint.innerText = forecast.hour[0].dewpoint_f + " \u00B0F"
            windchill.innerText = forecast.hour[0].windchill_f + " \u00B0F"
            temp.innerText = current.temp_f + " \u00B0F"
        }
    
        // set the speed values
        if (kph.checked || localStorage.getItem('speed') == 'kph') {
            windspeed.innerText = forecast.hour[0].wind_kph + ' kph'
            gustspeed.innerText = forecast.hour[0].gust_kph + ' kph'
        } else {
            windspeed.innerText = forecast.hour[0].wind_mph + ' mph'
            gustspeed.innerText = forecast.hour[0].gust_mph + ' mph'
        }
    }

    // set the remaining values
    clouds.innerText = forecast.hour[0].cloud + " %"
    precipitation.innerText = forecast.day.totalprecip_mm + " mm"
    humidity.innerText = forecast.hour[0].humidity + " %"
    rainchance.innerText = forecast.hour[0].chance_of_rain + " %"
    sunrise.innerText = astro.sunrise
    sunset.innerText = astro.sunset
    moonphase.innerText = astro.moon_phase
    condition.innerText = con.text
    location.innerText = data.location.name + ", " + data.location.country
    time.innerText = data.location.localtime

    // bring bottom layer back
    major.classList.replace('hidden', 'block')


    // Weather Codes
    if (con.code == 1000) {
        bg.setAttribute('class', 'bg bg-sunny');
    } else if (con.code == 1006) {
        bg.setAttribute('class', 'bg bg-cloudy');
    } else if (con.code == 1003) {
        bg.setAttribute('class', 'bg bg-partlyCloudy');
    } else if (con.code == 1009) {
        bg.setAttribute('class', 'bg bg-overcast');
    } else if (con.code == 1030) {
        bg.setAttribute('class', 'bg bg-mist');
    } else if (con.code == 1117) {
        bg.setAttribute('class', 'bg bg-blizzard');
    } else if (con.code == 1135 || con.code == 1147) {
        bg.setAttribute('class', 'bg bg-fog');
    } else if (con.code == 1150 || con.code == 1153 || con.code == 1168 || con.code == 1171) {
        bg.setAttribute('class', 'bg bg-drizzle');
    } else if (con.code == 1180 || con.code == 1183 || con.code == 1189 || con.code == 1189 || con.code == 1198 || con.code == 1204) {
        bg.setAttribute('class', 'bg bg-rain');
    } else if (con.code == 1192 || con.code == 1195 || con.code == 1201) {
        bg.setAttribute('class', 'bg bg-heavyRain');
    } else if (con.code == 1207 || con.code == 1210 || con.code == 1213 || con.code == 1216 || con.code == 1219 || con.code == 1222 || con.code == 1225 || con.code == 1237 || con.code == 1261 || con.code == 1264) {
        bg.setAttribute('class', 'bg bg-snow');
    } else if (con.code == 1240 || con.code == 1243 || con.code == 1246 || con.code == 1249 || con.code == 1252 || con.code == 1255 || con.code == 1258) {
        bg.setAttribute('class', 'bg bg-shower');
    } else if (con.code == 1273 || con.code == 1276 || con.code == 1279 || con.code == 1282) {
        bg.setAttribute('class', 'bg bg-thunder');
    }

    //debug
    console.log('FetchURL: https://api.weatherapi.com/v1/forecast.json?key=97a17acca844415cb5831439220402&q=' + local + '&days=1&aqi=yes&alerts=yes')
}