import { Request } from "express";
import { IFile } from "../../interfaces/file";
import { FileUploader } from "../../../helpers/fileUploader";
import prisma from "../../../shared/prisma";
import { Specialties } from "@prisma/client";

const getSpecialtiesFromDB = async () => {
  const result = await prisma.specialties.findMany({});
  return result;
};

const insertIntoDB = async (req: Request) => {
  const file = req.file as IFile;
  if (file) {
    const uploadToCloudinary = await FileUploader.uploadToCloudinary(file);
    req.body.icon = uploadToCloudinary?.secure_url;
  }

  const result = await prisma.specialties.create({
    data: req.body,
  });

  return result;
};

const deleteFromDB = async (id: string): Promise<Specialties> => {
  const result = await prisma.specialties.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SpecialtiesService = {
  getSpecialtiesFromDB,
  insertIntoDB,
  deleteFromDB
};
