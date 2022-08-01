import { Router } from "express";

import employeeRouter from "./employeeRouter";
import authRouter from "./authRouter";
import adminRouter from "./adminRouter";

const routers = Router();

routers.use(employeeRouter);
routers.use(authRouter);
routers.use(adminRouter);

export default routers;
