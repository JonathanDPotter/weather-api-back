import config from "../config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});

export async function getCurrentService(lat: string, lon: string) {
  try {
    const response = await axiosInstance.get(
      `current.json?key=${config.weatherAPI.apiKey}&q=${lat} ${lon}&aqi=no`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getThreeDayService(lat: string, lon: string) {
  try {
    const response = await axiosInstance.get(
      `forecast.json?key=${config.weatherAPI.apiKey}&q=${lat} ${lon}&days=3&aqi=no&alerts=yes`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
