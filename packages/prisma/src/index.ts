// require("dotenv").config({ path: "../../.env" });


import { PrismaClient } from "../generated/prisma";
import dotenv from 'dotenv';

export const prisma = new PrismaClient();
