import { Router } from "express";

import employeeRouter from "./employeeRouter";

const routers = Router();

routers.use(employeeRouter);

export default routers;
