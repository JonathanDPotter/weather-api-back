import { Request, Response, Router } from "express";
import path from "path";
import routes from "./routes.json";
import geoapifyRoutes from "./geoApify.routes";
import weatherAPI from "./weatherAPI.routes";

const router = Router();

router.get("/", (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

router.get("/home", (_req: Request, res: Response) => {
  res.redirect("/");
});

router.get("/about", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../static/about.html"));
});

router.get("/healthcheck", (_req: Request, res: Response) =>
  res.sendStatus(200)
);

router.get("/routes", (_req: Request, res: Response) =>
  res.status(200).json(routes)
);

// add api routes
router.use("/api/geoapify", geoapifyRoutes);
router.use("/api/weather", weatherAPI);

router.all("*", (_req: Request, res: Response) => {
  res.status(404).sendFile(path.join(__dirname, "../static/404.html"));
});

export default router;
