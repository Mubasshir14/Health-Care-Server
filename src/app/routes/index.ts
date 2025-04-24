import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { AdminRoutes } from "../modules/Admin/admin.routes";
import { UserRoutes } from "../modules/User/user.routes";
import { SpecialtiesRoutes } from "../modules/Specialties/specialties.route";
import { DoctorRoutes } from "../modules/Doctor/doctor.route";
import { PatientRoutes } from "../modules/Patients/patient.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
  {
    path: "/doctor",
    route: DoctorRoutes,
  },
  {
    path: "/patient",
    route: PatientRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
