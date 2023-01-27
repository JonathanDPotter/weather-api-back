import { Router } from "express";
import controller from "../controllers/weatherAPI";

const router = Router();

router.get("/current/:lat/:lon", controller.getCurrent);

router.get("/three-day/:lat/:lon", controller.getThreeDay);

export default router;
