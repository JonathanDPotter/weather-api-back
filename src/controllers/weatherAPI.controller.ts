import { Request, Response } from "express";
import {
  getCurrentService,
  getThreeDayService,
} from "../services/weatherApi.service";

const getCurrent = async (req: Request, res: Response) => {
  const { lat, lon } = req.params;

  if (!parseFloat(lat) || !parseFloat(lon)) {
    res.status(400).json("bad params");
    return;
  }

  try {
    const response = await getCurrentService(lat, lon);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error);
  }
};

const getThreeDay = async (req: Request, res: Response) => {
  const { lat, lon } = req.params;

  if (!parseFloat(lat) || !parseFloat(lon)) {
    res.status(400).json("bad params");
    return;
  }

  try {
    const response = await getThreeDayService(lat, lon);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json(error);
  }
};

export default { getCurrent, getThreeDay };
