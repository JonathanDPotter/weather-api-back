import { Router } from "express";
import controller from "../controllers/weatherAPI";

const router = Router();

router.get("/current/:lat/:lon", controller.getCurrent);

export default router;