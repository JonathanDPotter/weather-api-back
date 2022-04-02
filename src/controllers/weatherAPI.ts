import { Request, Response } from "express";
import axios from "axios";
import config from "../config";

const baseURL = "https://api.weatherapi.com/v1/";

const getCurrent = async (req: Request, res: Response) => {
  const { lat, lon } = req.params;
  try {
    const response = await axios.get(
      `${baseURL}current.json?key=${config.WEATHERAPI.apiKey}&q=${lat} ${lon}&aqi=no`
    );
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(400).json(error);
  }
};

const getThreeDay = async (req: Request, res: Response) => {
  const { lat, lon } = req.params;
  try {
    const response = await axios.get(
      `${baseURL}forecast.json?key=${config.WEATHERAPI.apiKey}&q=${lat} ${lon}&days=10&aqi=no&alerts=yes`
    );
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(400).json(error);
  }
};

export default { getCurrent, getThreeDay };
