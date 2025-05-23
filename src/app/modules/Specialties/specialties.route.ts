import express, { NextFunction, Request, Response } from "express";
import { FileUploader } from "../../../helpers/fileUploader";
import { SpecialtiesValidtaion } from "./specialties.validation";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
import { SpecialtiesController } from "./specialties.controller";

const router = express.Router();

router.get("/", SpecialtiesController.getSpecialtiesFromDB);

router.post(
  "/",
  FileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = SpecialtiesValidtaion.create.parse(JSON.parse(req.body.data));
    return SpecialtiesController.insertIntoDB(req, res, next);
  }
);

router.delete(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteFromDB
);

export const SpecialtiesRoutes = router;
