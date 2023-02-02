import { Request, Response } from "express";
import { getCityService, getCoordsFromZipService } from "../services/geoApify.service";

async function getCity(req: Request, res: Response) {
  const { lat, lon } = req.params;

  if (!parseFloat(lat) || !parseFloat(lon)) {
    res.status(400).json("bad params");
    return;
  }

  try {
    const result = await getCityService(lat, lon);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json(error);
  }
}

async function getCoordsFromZip(req: Request, res: Response) {
  const { zip } = req.params;

  if (!parseInt(zip)) return res.status(400).json("bad params");

  try {
    const result = await getCoordsFromZipService(zip);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json(error);
  }
}

export default { getCity, getCoordsFromZip };
