import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthServices } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthServices.loginUser(req.body);
    const { refresshToken } = result;

    res.cookie("refreshToken", refresshToken, {
      secure: false,
      httpOnly: true,
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Logged in Successfully!",
      data: {
        accessToken: result.accessToken,
        needPasswordChange: result.needPasswordChange,
      },
    });
  }
);

const refreshToken: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    const result = await AuthServices.refreshToken(refreshToken);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Logged in Successfully!",
      data: result,
      //   data: {
      //     accessToken: result.accessToken,
      //     needPasswordChange: result.needPasswordChange,
      //   },
    });
  }
);

export const AuthController = {
  loginUser,
  refreshToken,
};
