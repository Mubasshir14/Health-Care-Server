import express from "express";
import { ScheduleController } from "./schedule.controller";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  ScheduleController.inserIntoDB
);

router.get(
  "/",
  auth(UserRole.DOCTOR),
  ScheduleController.getAllFromDb
);

export const ScheduleRoutes = router;
