import { NextFunction, Request, RequestHandler, Response } from "express";
import { AdminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";


const getAllFromDB: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  const result = await AdminService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin retrieved Successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getByIdFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AdminService.getByIdFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin retrieved Successfully",
    data: result,
  });
});

const updateIntoDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AdminService.updateIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin updated Successfully",
    data: result,
  });
});

const deleteFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AdminService.deleteFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin deleted Successfully",
    data: result,
  });
});

const softDeleteFromDb: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AdminService.softDeleteFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin deleted Successfully",
    data: result,
  });
});

export const AdminController = {
  getAllFromDB,
  getByIdFromDb,
  updateIntoDb,
  deleteFromDb,
  softDeleteFromDb,
};
