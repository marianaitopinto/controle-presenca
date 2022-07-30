import { Router } from "express";

import employeeRouter from "./employeeRouter";
import authRouter from "./authRouter";

const routers = Router();

routers.use(employeeRouter);
routers.use(authRouter);

export default routers;
