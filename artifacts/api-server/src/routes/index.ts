import { Router, type IRouter } from "express";
import healthRouter from "./health";
import siteConfigRouter from "./site-config";
import storageRouter from "./storage";
import videoConfigRouter from "./video-config";

const router: IRouter = Router();

router.use(healthRouter);
router.use(siteConfigRouter);
router.use(storageRouter);
router.use(videoConfigRouter);

export default router;
