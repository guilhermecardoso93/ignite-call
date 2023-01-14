/* eslint-disable prettier/prettier */
import type { NextApiRequest, NextApiResponse } from 'next'
import dayjs from "dayjs";
import { prisma } from '../../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { date } = req.query

  if ( !date ) {
    return res.status(400).json({ message: 'Date not provided'})
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    }
  })

  if(!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  const referenceDate = dayjs(String(date))
}


