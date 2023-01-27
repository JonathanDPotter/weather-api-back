import { Request, Response } from "express";
import axios from "axios";
import config from "../config";
import Icoords from "../interfaces/coords";

const { apiKey } = config.geoApify;

const getCity = async (req: Request, res: Response) => {
  const { lat, lon } = req.params;
  console.log(req.params);
  try {
    const result = await axios.get(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`
    );
    const { city, county, state, country } = result.data.features[0].properties;
    res.json(`${city ? city : county} ${state}, ${country}`);
  } catch (error: any) {
    res.json(error);
  }
};

const getCoordsFromZip = async (req: Request, res: Response) => {
  const { zip } = req.params;
  try {
    const result = await axios.get(
      `https://api.geoapify.com/v1/geocode/search?text=${zip}&lang=en&limit=10&type=postcode&filter=us&format=json&apiKey=${apiKey}`
    );
    const { lat, lon } = result.data.results[0];
    const coordsToReturn: Icoords = {
      latitude: lat.toString(),
      longitude: lon.toString(),
    };
    res.json(coordsToReturn);
  } catch (error: any) {
    res.json(error);
  }
};

export default { getCity, getCoordsFromZip };
