import { Router } from "express";
import controller from "../controllers/geoApify.controller";

const router = Router();

router.get("/city/:lat/:lon", controller.getCity);
router.get("/coords/:zip", controller.getCoordsFromZip);

export default router;
