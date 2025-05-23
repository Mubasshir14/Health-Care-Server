import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PaymentService } from "./payment.service";

const initPayment = catchAsync(async (req: Request, res: Response) => {
  const { appointmentId } = req.params;
  const result = await PaymentService.initPayment(appointmentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment Initialize successfully",
    data: result,
  });
});

const validatePayment = catchAsync(async (req: Request, res: Response) => {
  const result = await PaymentService.validatePayment(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment Validated successfully",
    data: result,
  });
});

export const PaymentController = {
  initPayment,
  validatePayment
};
