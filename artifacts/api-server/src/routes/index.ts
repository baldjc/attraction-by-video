import { Router, type IRouter } from "express";
import healthRouter from "./health";
import siteConfigRouter from "./site-config";

const router: IRouter = Router();

router.use(healthRouter);
router.use(siteConfigRouter);

export default router;
