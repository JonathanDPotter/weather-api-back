import axios from "axios";
import config from "../config";
import Icoords from "../interfaces/coords";

const { apiKey } = config.geoApify;

export async function getCityService(lat: string, lon: string) {
  try {
    const result = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`
    );
    const { city, county, state, country } = result.data.features[0].properties;
    return `${city ? city : county} ${state}, ${country}`;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getCoordsFromZipService(zip: string) {
  try {
    const result = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?text=${zip}&lang=en&limit=10&type=postcode&filter=us&format=json&apiKey=${apiKey}`
    );
    const { lat, lon } = result.data.results[0];
    const coordsToReturn: Icoords = {
      latitude: lat.toString(),
      longitude: lon.toString(),
    };
    return coordsToReturn;
  } catch (error: any) {
    throw new Error(error);
  }
}
