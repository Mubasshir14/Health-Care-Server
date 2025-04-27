import { IAuthUser } from "../../interfaces/common";
import { IPaginationOptions } from "../../interfaces/pagination";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { IDoctorScheduleFilterRequest } from "./doctorSchedule.interface";
import prisma from "../../../shared/prisma";

const insertIntoDB = async (
  user: any,
  payload: {
    scheduleIds: string[];
  }
) => {
  const doctorData = await prisma.doctor.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const doctorScheduleData = payload.scheduleIds.map((scheduleId) => ({
    doctorId: doctorData.id,
    scheduleId,
  }));

  const result = await prisma.doctorSchedules.createMany({
    data: doctorScheduleData,
  });

  return result;
};

export const DoctorScheduleService = {
  insertIntoDB,
  // getMySchedule,
  // deleteFromDB,
  // getAllFromDB
};
