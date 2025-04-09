import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.routes";
import { AdminROutes } from "./app/modules/Admin/admin.routes";

const app: Application = express();
app.use(cors());
//*Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "PH HEALTH CARE SERVER",
  });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", AdminROutes);

export default app;
