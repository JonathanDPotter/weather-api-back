# Weather-api

This is the back-end for my Weather-Imp app. The repo for the front-end is [here](https://github.com/JonathanDPotter/weather-api), and it is hosted on Vercel [here](https://weather-imp.vercel.app/).

---

## Technologies Used

This app is written in typescript with express.  I used mongoose to manage a mongoDB Atlas database, bcrypt to hash user passwords, jsonwebtoken to manage authentication and axios to make api calls.  The app gets geolocation data from [Geoapify](https://www.geoapify.com/) and weather data from [Weatherapi](https://www.weatherapi.com/).

---

## Routes

The routes can be viewed [here](https://jonathan-potter-weather-api.herokuapp.com/) and are as follows:

```json

{
  "geoapify": {
    "ROOT": "/api/geoapify",
    "GET": {
      "/coords/:zip": "Returns latitude and longitude coordinates from the zip code(:zip) provided.",
      "/city/:lat/:lon": "Returns the city that is at the latitude(:lat) and longitude(:lon) provided."
    }
  },
  "weather": {
    "ROOT": "/api/weather",
    "GET": {
      "/current/:lat/:lon": "Returns a json object with the current weather for the lattitude(:lat) and longitude(:lon) provided.",
      "/three-day/:lat/:lon": "Returns a json object with the three-day forecast for the lattitude(:lat) and longitude(:lon) provided"
    }
  },
  "index": {
    "ROOT": "/",
    "GET": {
      "/": "returns the homepage",
      "/routes": "returns this object",
      "/healthcheck": "returns a 200 status"
    }
  }
}

```

---

## Functionality

This front-end makes requests from this api which in turn gets data from the two third-party apis to provide location and weather data to the user.  The data is supplied as json objects.  A user sees the current weather on the landing page.  They can choose to enter a US zip code to see weather for another location, switch to the hourly forecast, or switch to a three-day forecast from the page header.

![image](https://user-images.githubusercontent.com/30156468/168269677-996c3723-eafd-4a0b-9ad8-5c96898bcfaa.png)