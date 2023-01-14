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
  const isPastDate = referenceDate.endOf('day').isBefore(new Date())

  if(isPastDate) {
    return res.json({ })
  }

  //  TimeInterval

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: referenceDate.get('day')
    }
  })

  if (!userAvailability) {
    return res.json({ availability: []})
  }

  const {time_start_in_minutes, time_end_in_minutes } = userAvailability

  const startHour = time_start_in_minutes / 60 
  const endHour = time_end_in_minutes / 60

  const possibleTimes = Array.from({ length: endHour - startHour }).map(
    (_, i) => {
    return startHour + i
    },
   )

   const blockedTimes = await prisma.schedulings.findMany({
    select: {
      date: true,
    },
    where: {
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startHour).toDate(),
        lte: referenceDate.set('hour', endHour).toDate(),
      },
    },
  })


  const availableTimes = possibleTimes.filter((time) => {
    const isTimeBlocked = blockedTimes.some(
      (blockedTime) => blockedTime.date.getHours() === time,
    )

   return res.json({possibleTimes, availableTimes})
}


