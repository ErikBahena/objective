// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
    },
  });
  res.status(201).json(user);
}
