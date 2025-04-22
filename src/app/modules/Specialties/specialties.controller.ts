import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { SpecialtiesService } from "./specialties.service";

const getSpecialtiesFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SpecialtiesService.getSpecialtiesFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Specialties fetched successfully!",
      data: result,
    });
  }
);
const insertIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SpecialtiesService.insertIntoDB(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Specialties created successfully!",
      data: result,
    });
  }
);

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialtiesService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialty deleted successfully",
    data: result,
  });
});

export const SpecialtiesController = {
  insertIntoDB,
  getSpecialtiesFromDB,
  deleteFromDB,
};
